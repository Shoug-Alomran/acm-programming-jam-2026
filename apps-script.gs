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

var SHEET_NAME     = 'Registrations'; // registration tab
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
var LIMITS = {
  fullName: 120,
  universityId: 40,
  universityEmail: 254,
  phoneNumber: 40,
  teamName: 120,
  teamMembers: 1500,
  name: 120,
  email: 254,
  message: 3000
};

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

  if (form.website) return page('OK');

  for (var i = 0; i < REQUIRED.length; i++) {
    if (!form[REQUIRED[i]]) return page('Error: missing ' + REQUIRED[i]);
  }

  var validationError = validateLengths(form, ['fullName', 'universityId', 'universityEmail', 'phoneNumber', 'teamName', 'teamMembers']);
  if (validationError) return page('Error: ' + validationError);
  if (!isEmail(form.universityEmail)) return page('Error: invalid universityEmail');

  var identity = String(form.universityEmail).trim().toLowerCase() + '|' + String(form.universityId).trim();
  if (!allowRequest('registration', identity, 300)) return page('Error: please wait before submitting again');

  var headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
                     .getValues()[0]
                     .map(function (h) { return String(h).trim(); });

  var emailCol = headers.indexOf('University Email');
  var idCol = headers.indexOf('University ID');
  if (hasExactValue(sheet, emailCol, form.universityEmail) || hasExactValue(sheet, idCol, form.universityId)) {
    return page('Error: this participant is already registered');
  }

  var row = new Array(headers.length).fill('');
  Object.keys(FIELD_TO_HEADER).forEach(function (field) {
    var col = headers.indexOf(FIELD_TO_HEADER[field]);
    if (col !== -1) row[col] = safeCell(form[field] || '');
  });

  var tsCol = headers.indexOf('Timestamp');
  if (tsCol !== -1) { row[tsCol] = new Date(); } else { row.push(new Date()); }

  sheet.appendRow(row);
  return page('OK');
}

function handleContact(form) {
  if (form.website) return page('OK');
  if (!form.name || !form.email || !form.message) return page('Error: missing fields');

  var validationError = validateLengths(form, ['name', 'email', 'message']);
  if (validationError) return page('Error: ' + validationError);
  if (!isEmail(form.email)) return page('Error: invalid email');

  var normalizedEmail = String(form.email).trim().toLowerCase();
  if (!allowRequest('contact', normalizedEmail, 60)) return page('Error: please wait before sending another message');
  if (!allowRequest('contact-duplicate', normalizedEmail + '|' + String(form.message).trim(), 3600)) {
    return page('Error: duplicate message');
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(MESSAGES_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(MESSAGES_SHEET);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  }
  sheet.appendRow([new Date(), safeCell(form.name), safeCell(form.email), safeCell(form.message)]);

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
  var json = JSON.stringify({ source: 'jam26', message: String(msg) }).replace(/</g, '\\u003c');
  return HtmlService.createHtmlOutput('<p>' + String(msg) + '</p><script>parent.postMessage(' + json + ', "*");<\/script>');
}

function validateLengths(form, fields) {
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    if (String(form[field] || '').length > LIMITS[field]) return field + ' is too long';
  }
  return '';
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function safeCell(value) {
  var text = String(value || '').trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function hasExactValue(sheet, zeroBasedColumn, value) {
  if (zeroBasedColumn < 0 || sheet.getLastRow() < 2) return false;
  var values = sheet.getRange(2, zeroBasedColumn + 1, sheet.getLastRow() - 1, 1).getDisplayValues();
  var target = String(value || '').trim().toLowerCase();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === target) return true;
  }
  return false;
}

function allowRequest(scope, identity, seconds) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, scope + '|' + identity);
  var key = Utilities.base64EncodeWebSafe(digest).slice(0, 80);
  var cache = CacheService.getScriptCache();
  if (cache.get(key)) return false;
  cache.put(key, '1', seconds);
  return true;
}
