/**
 * ACM PSU public event registration endpoint.
 *
 * One deployed Apps Script web app accepts registrations from both event sites
 * and writes them into the single ACM PSU Club Records workbook.
 *
 *   event=jam26 -> jam26
 *   event=ctf30 -> ctf30
 *
 * FAQ messages from JAM.26 still use the spreadsheet this script is attached to.
 */

var REGISTRATION_SPREADSHEET_ID = '1WtNGmVYO8hk_w3I37n1T6wS9_z_dTyTPW4fTHZ4lW3s';
var JAM_SHEET = 'jam26';
var CTF_SHEET = 'ctf30';
var MESSAGES_SHEET = 'Messages';
var ORGANIZER_EMAIL = 'shoug.alomran@shoug-tech.com';

var JAM_FIELDS = {
  fullName:        'Full Name',
  universityId:    'University ID',
  universityEmail: 'University Email',
  phoneNumber:     'Phone Number',
  major:           'Major',
  teamName:        'Team Name',
  teamMembers:     'Team Members'
};

var CTF_FIELDS = {
  teamName:        'Team Name',
  captainName:     'Captain Name',
  captainId:       'Captain University ID',
  captainEmail:    'Captain University Email',
  captainPhone:    'Captain Phone Number',
  captainMajor:    'Captain Major',
  member2Name:     'Member 2 Name',
  member2Id:       'Member 2 University ID',
  member2Email:    'Member 2 University Email',
  member2Major:    'Member 2 Major',
  member3Name:     'Member 3 Name',
  member3Id:       'Member 3 University ID',
  member3Email:    'Member 3 University Email',
  member3Major:    'Member 3 Major',
  experience:      'Experience Level'
};

var LIMITS = {
  fullName: 120,
  universityId: 40,
  universityEmail: 254,
  phoneNumber: 40,
  major: 120,
  teamName: 120,
  teamMembers: 1500,
  captainName: 120,
  captainId: 40,
  captainEmail: 254,
  captainPhone: 40,
  captainMajor: 120,
  member2Name: 120,
  member2Id: 40,
  member2Email: 254,
  member2Major: 120,
  member3Name: 120,
  member3Id: 40,
  member3Email: 254,
  member3Major: 120,
  experience: 40,
  name: 120,
  email: 254,
  message: 3000
};

function doGet() {
  return page('ACM PSU event registration endpoint is live.');
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var form = (e && e.parameter) || {};
    if (form.type === 'contact') return handleContact(form);
    return String(form.event || 'jam26') === 'ctf30'
      ? handleCtfRegistration(form)
      : handleJamRegistration(form);
  } catch (err) {
    return page('Error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

function handleJamRegistration(form) {
  if (form.website) return page('OK');

  var required = ['fullName', 'universityId', 'universityEmail', 'phoneNumber', 'major', 'teamName'];
  var missing = requireFields(form, required);
  if (missing) return page('Error: missing ' + missing);

  var validationError = validateLengths(form, required.concat(['teamMembers']));
  if (validationError) return page('Error: ' + validationError);
  if (!isEmail(form.universityEmail)) return page('Error: invalid universityEmail');

  var sheet = registrationSheet(JAM_SHEET);
  if (duplicateInAnyColumn(sheet, ['University Email', 'University ID'], [form.universityEmail, form.universityId])) {
    return page('Error: this participant is already registered');
  }

  var identity = String(form.universityEmail).trim().toLowerCase() + '|' + String(form.universityId).trim();
  if (!allowRequest('jam26', identity, 300)) return page('Error: please wait before submitting again');

  appendMappedRow(sheet, JAM_FIELDS, form);
  return page('OK');
}

function handleCtfRegistration(form) {
  if (form.website) return page('OK');

  var required = [
    'teamName', 'captainName', 'captainId', 'captainEmail', 'captainPhone', 'captainMajor',
    'member2Name', 'member2Id', 'member2Email', 'member2Major', 'experience'
  ];
  var missing = requireFields(form, required);
  if (missing) return page('Error: missing ' + missing);

  var optionalThird = ['member3Name', 'member3Id', 'member3Email', 'member3Major'];
  var anyThird = optionalThird.some(function (field) { return String(form[field] || '').trim(); });
  if (anyThird) {
    var missingThird = requireFields(form, optionalThird);
    if (missingThird) return page('Error: complete all Member 3 fields');
  }

  var validationError = validateLengths(form, required.concat(optionalThird));
  if (validationError) return page('Error: ' + validationError);
  if (!isEmail(form.captainEmail) || !isEmail(form.member2Email) || (anyThird && !isEmail(form.member3Email))) {
    return page('Error: invalid university email');
  }

  var sheet = registrationSheet(CTF_SHEET);
  var headers = ['Captain University Email', 'Captain University ID', 'Team Name'];
  var values = [form.captainEmail, form.captainId, form.teamName];
  if (duplicateInAnyColumn(sheet, headers, values)) return page('Error: this team or captain is already registered');

  var identity = String(form.captainEmail).trim().toLowerCase() + '|' + String(form.teamName).trim().toLowerCase();
  if (!allowRequest('ctf30', identity, 300)) return page('Error: please wait before submitting again');

  appendMappedRow(sheet, CTF_FIELDS, form);
  return page('OK');
}

function registrationSheet(name) {
  var workbook = SpreadsheetApp.openById(REGISTRATION_SPREADSHEET_ID);
  var sheet = workbook.getSheetByName(name);
  if (!sheet) throw new Error('no sheet named "' + name + '"');
  return sheet;
}

function appendMappedRow(sheet, mapping, form) {
  var headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
    .getValues()[0]
    .map(function (h) { return String(h).trim(); });
  var row = new Array(headers.length).fill('');

  Object.keys(mapping).forEach(function (field) {
    var col = headers.indexOf(mapping[field]);
    if (col !== -1) row[col] = safeCell(form[field] || '');
  });

  var tsCol = headers.indexOf('Timestamp');
  if (tsCol !== -1) row[tsCol] = new Date();
  sheet.appendRow(row);
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

  var to = ORGANIZER_EMAIL || Session.getEffectiveUser().getEmail();
  MailApp.sendEmail({
    to: to,
    replyTo: form.email,
    subject: 'ACM event question from ' + form.name,
    body: 'From: ' + form.name + ' <' + form.email + '>\n\n' + form.message +
      '\n\n— Reply to this email to answer them directly.'
  });

  return page('OK');
}

function requireFields(form, fields) {
  for (var i = 0; i < fields.length; i++) {
    if (!String(form[fields[i]] || '').trim()) return fields[i];
  }
  return '';
}

function validateLengths(form, fields) {
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    if (String(form[field] || '').length > (LIMITS[field] || 500)) return field + ' is too long';
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

function duplicateInAnyColumn(sheet, headersToCheck, valuesToCheck) {
  if (sheet.getLastRow() < 2) return false;
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
    .map(function (h) { return String(h).trim(); });

  for (var i = 0; i < headersToCheck.length; i++) {
    var col = headers.indexOf(headersToCheck[i]);
    if (col < 0) continue;
    var target = String(valuesToCheck[i] || '').trim().toLowerCase();
    if (!target) continue;
    var existing = sheet.getRange(2, col + 1, sheet.getLastRow() - 1, 1).getDisplayValues();
    for (var r = 0; r < existing.length; r++) {
      if (String(existing[r][0]).trim().toLowerCase() === target) return true;
    }
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

function page(msg) {
  var json = JSON.stringify({ source: 'acm-event-registration', message: String(msg) }).replace(/</g, '\\u003c');
  return HtmlService.createHtmlOutput('<p>' + String(msg) + '</p><script>parent.postMessage(' + json + ', "*");<\/script>');
}
