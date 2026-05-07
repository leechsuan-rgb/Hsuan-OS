# Google Sheets + Email 聯絡表單設置指南

## 步驟 1: 創建 Google Sheet

1. 前往 [Google Sheets](https://sheets.google.com)
2. 創建新試算表，命名為 "Hsuan OS 聯絡表單"
3. 複製試算表的 ID（網址中的長字串）
   - 網址格式: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
   - 你的 Google Sheet ID 是: `1_fnLYp3eT5y4xMTF-MrC4yUCo631igd7mO0evFEB5nY`

## 步驟 2: 設置 Google Apps Script

1. 前往 [Google Apps Script](https://script.google.com)
2. 點擊 "新建專案"
3. 將 `google-apps-script.js` 中的代碼複製貼上
4. **已在 `google-apps-script.js` 中設定實際值**:
   - `SHEET_ID` 已設為 `1_fnLYp3eT5y4xMTF-MrC4yUCo631igd7mO0evFEB5nY`
   - `SHEET_NAME` 已設為 `Hsuan OS 聯絡表單`
   - `EMAIL_TO` 已設為 `leechsuan@gmail.com`

## 步驟 3: 部署 Web App

1. 點擊 "部署" → "新建部署"
2. 選擇類型: "網路應用程式"
3. 設定:
   - **說明**: Hsuan OS Contact Form
   - **執行身分**: 您自己
   - **有權存取的人**: 任何人
4. 點擊 "部署"
5. **複製 Web App URL**（格式類似: `https://script.google.com/macros/s/SCRIPT_ID/exec`）

## 步驟 4: 更新前端代碼

1. 打開 `src/components/ContactForm.tsx`
2. 找到這行: `const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
3. 替換為您的 Web App URL

## 步驟 5: 測試

1. 運行 `npm run dev`
2. 填寫聯絡表單並提交
3. 檢查:
   - Google Sheet 是否收到數據
   - 您的Email是否收到通知

## 功能說明

- ✅ **數據存儲**: 所有表單提交都會保存到 Google Sheet
- ✅ **Email通知**: 每次提交都會發送Email給您
- ✅ **時間戳**: 自動記錄提交時間
- ✅ **錯誤處理**: 如果發送失敗會顯示錯誤訊息

## 安全注意事項

- Apps Script 設置為"任何人"可訪問是必要的，因為前端網站是公開的
- 您的Google Sheet不會被公開，只有通過Apps Script才能寫入
- 考慮設置Google Sheet的分享權限為私有