// Google Apps Script 代碼 - 聯絡表單處理器
// 部署為Web App，設置為"任何人"可以訪問

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 寫入Google Sheet
    const sheetId = 'YOUR_GOOGLE_SHEET_ID'; // 請替換為您的Google Sheet ID
    const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];

    // 添加標題行（如果還沒有）
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['時間戳', '姓名', 'Email', '訊息']);
    }

    // 添加數據
    const timestamp = new Date().toLocaleString('zh-TW');
    sheet.appendRow([timestamp, data.name, data.email, data.message]);

    // 發送Email通知
    const recipientEmail = 'leechsuan@gmail.com'; // 您的Email
    const subject = `新聯絡請求 from ${data.name}`;
    const body = `
新聯絡請求已收到！

時間: ${timestamp}
姓名: ${data.name}
Email: ${data.email}
訊息:
${data.message}

---
此郵件由 Hsuan OS 聯絡表單自動發送
    `.trim();

    MailApp.sendEmail(recipientEmail, subject, body);

    // 返回成功響應
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: '訊息已成功發送！' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error processing form submission:', error);

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: '發送失敗，請稍後再試' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 測試函數（可選）
function testFormSubmission() {
  const testData = {
    name: '測試用戶',
    email: 'test@example.com',
    message: '這是測試訊息'
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  console.log(result.getContent());
}