/**
 * JAM.26 — one endpoint for both the registration form and the FAQ contact form.
 *
 *   team-formation.html  ->  appends a row to the registration sheet
 *   faq.html             ->  appends a row to "Messages" AND emails you the question
 *
 * SETUP
 *   1. Extensions > Apps Script, paste this in, Save.
 *   2. Deploy > New deployment > Web app
 *        Execute as:      Me
 *        Who has access:  Anyone     <- must be "Anyone", not "Anyone with a Google account"
 *   3. Authorize (Advanced > Go to project > Allow — the "unverified" warning is expected).
 *   4. Copy the Web app URL ending in /exec and put it in config.js.
 *
 * TEST: open the /exec URL in a browser -> "JAM.26 endpoint is live".
 */

var SHEET_NAME     = 'Sheet1';    // registration tab
var MESSAGES_SHEET = 'Messages';  // created automatically on the first question
var ORGANIZER_EMAIL = 'shoug.alomran@shoug-tech.com';   // where FAQ questions are sent

// registration form field -> column header text in row 1
var FIELD_TO_HEADER = {
  fullName:        'Full Name',
  universityId:    'University ID',
  universityEmail: 'University Email',
  phoneNumber:     'Phone Number',
  teamName:        'Team Name',
  teamMembers:     'Team Members'
};

var REQUIRED = ['fullName', 'universityId', 'universityEmail', 'phoneNumber', 'teamName'];

function doGet() {
  return page('JAM.26 endpoint is live.');
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var form = (e && e.parameter) || {};
    return form.type === 'contact' ? handleContact(form) : handleRegistration(form);
  } catch (err) {
    return page('Error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------ */

function handleRegistration(form) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) return page('Error: no sheet named "' + SHEET_NAME + '"');

  for (var i = 0; i < REQUIRED.length; i++) {
    if (!form[REQUIRED[i]]) return page('Error: missing ' + REQUIRED[i]);
  }

  var headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
                     .getValues()[0]
                     .map(function (h) { return String(h).trim(); });

  var row = new Array(headers.length).fill('');
  Object.keys(FIELD_TO_HEADER).forEach(function (field) {
    var col = headers.indexOf(FIELD_TO_HEADER[field]);
    if (col !== -1) row[col] = form[field] || '';
  });

  var tsCol = headers.indexOf('Timestamp');
  if (tsCol !== -1) { row[tsCol] = new Date(); } else { row.push(new Date()); }

  sheet.appendRow(row);
  return page('OK');
}

function handleContact(form) {
  if (!form.name || !form.email || !form.message) return page('Error: missing fields');

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(MESSAGES_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(MESSAGES_SHEET);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  sheet.appendRow([new Date(), form.name, form.email, form.message]);

  // Email you the question. replyTo is the asker, so hitting Reply answers them.
  var to = ORGANIZER_EMAIL || Session.getEffectiveUser().getEmail();
  MailApp.sendEmail({
    to: to,
    replyTo: form.email,
    subject: 'JAM.26 question from ' + form.name,
    body: 'From: ' + form.name + ' <' + form.email + '>\n\n' +
          form.message + '\n\n' +
          '— Reply to this email to answer them directly.'
  });

  return page('OK');
}

function page(msg) {
  return HtmlService.createHtmlOutput('<p>' + msg + '</p>');
}
