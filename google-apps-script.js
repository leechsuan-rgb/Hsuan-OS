const SHEET_ID = '1_fnLYp3eT5y4xMTF-MrC4yUCo631igd7mO0evFEB5nY';
const SHEET_NAME = 'Hsuan OS 聯絡表單';
const EMAIL_TO = 'leechsuan@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.getSheets()[0];
    }

    if (!sheet) {
      throw new Error(`找不到工作表：${SHEET_NAME} 或者第一個工作表`);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['時間', '姓名', 'Email', '訊息']);
    }

    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.message || ''
    ]);

    const subject = `Hsuan OS 新聯絡表單：${data.name || '無名氏'}`;
    const body =
      `姓名：${data.name || ''}\n` +
      `Email：${data.email || ''}\n\n` +
      `訊息：\n${data.message || ''}`;

    MailApp.sendEmail(EMAIL_TO, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Hsuan OS Contact Form API is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
