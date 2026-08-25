/**
 * JAM.26 — registration endpoint.
 *
 * Receives a POST from team-formation.html and appends one row to the
 * registration sheet.
 *
 * Columns are matched by HEADER NAME, not by position, so you can reorder
 * or add columns in the sheet without touching this script.
 *
 * SETUP
 *   1. Extensions > Apps Script, paste this in, Save.
 *   2. Deploy > New deployment > Web app
 *        Execute as:      Me
 *        Who has access:  Anyone      <- must be "Anyone", not "Anyone with a Google account"
 *   3. Authorize (Advanced > Go to project > Allow — the "unverified" warning is expected).
 *   4. Copy the Web app URL ending in /exec and send it to Claude.
 *
 * TEST: open the /exec URL in a browser. You should see "JAM.26 endpoint is live".
 */

var SHEET_NAME = 'Sheet1';   // the tab name, not the file name

// form field  ->  column header text in row 1
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
  var lock = LockService.getScriptLock();          // stops two submits racing for the same row
  try {
    lock.waitLock(20000);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) return page('Error: no sheet named "' + SHEET_NAME + '"');

    var form = (e && e.parameter) || {};

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

    // Timestamp: use a "Timestamp" column if one exists, otherwise tack it on the end.
    var tsCol = headers.indexOf('Timestamp');
    if (tsCol !== -1) { row[tsCol] = new Date(); } else { row.push(new Date()); }

    sheet.appendRow(row);
    return page('OK');

  } catch (err) {
    return page('Error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

function page(msg) {
  return HtmlService.createHtmlOutput('<p>' + msg + '</p>');
}
