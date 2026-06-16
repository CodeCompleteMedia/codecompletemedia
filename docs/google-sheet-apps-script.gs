/**
 * Google Apps Script — saves Code Complete Media contact submissions to a Sheet.
 *
 * SETUP (one time, ~3 minutes):
 *   1. Create a Google Sheet (e.g. "CCM — Contact submissions").
 *   2. In the Sheet: Extensions → Apps Script.
 *   3. Delete the default code, paste THIS file, and Save.
 *   4. Deploy → New deployment → type "Web app".
 *        - Description: "CCM contact webhook"
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Click Deploy, authorize when prompted.
 *   5. Copy the Web app URL (ends in /exec).
 *   6. Put that URL in your .env / Vercel as GOOGLE_SHEET_WEBHOOK_URL.
 *
 * The first row is written as headers automatically.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid concurrent-write races
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    // Write a header row once.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Submitted At',
        'Name',
        'Email',
        'Needs',
        'Budget',
        'Message',
      ]);
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.need || '',
      data.budget || '',
      data.message || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
