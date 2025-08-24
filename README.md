# 🛠️ Captcha Resolver for BLS Egypt Site

This repository contains **Tampermonkey/Greasemonkey userscripts** created to assist with handling captcha workflows on the [BLS Egypt Visa Appointment website](https://egypt.blsspainglobal.com).  
The scripts demonstrate **automation, DOM manipulation, and API integration** for educational and research purposes.

---

## 📌 Overview
There are two main scripts in this repo:

1. **Bypass Captcha (v0.2, April 2024)**  
   - Automates captcha field population using AJAX requests.  
   - Simulates captcha submission with hidden form tokens.  
   - Automatically triggers form submission upon success.  

2. **Captcha Resolver (Sept 2024)**  
   - Uses DOM parsing to detect captcha targets and grid images.  
   - Integrates with [NoCaptchaAI](https://pro.nocaptchaai.com/) to send captcha challenges for OCR-based solving.  
   - Auto-selects the correct captcha images and optionally submits the form.  
   - Provides user feedback with a spinner overlay and error handling.

---

## ⚙️ Requirements
- **Browser**: Chrome, Edge, or Firefox  
- **Extension**: [Tampermonkey](https://www.tampermonkey.net/) (or Greasemonkey for Firefox)  
- **Dependencies**:  
  - jQuery (loaded by site or injected)  
  - For Captcha Resolver: valid API key from [NoCaptchaAI](https://pro.nocaptchaai.com/)

---

## 🚀 Installation & Usage
1. Install **Tampermonkey** in your browser.  
2. Create a new userscript and paste the code from one of the files in this repo.  
3. For the **Captcha Resolver script**, set your API key inside the script:
   ```javascript
   const captchaConfig = {
       enabled: 'on',
       apiKey: 'YOUR_API_KEY_HERE',
   }
