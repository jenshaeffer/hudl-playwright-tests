# 📘 Hudl E2E Tests (Playwright)
This project contains end-to-end (E2E) tests for the [Hudl](https://www.hudl.com/) web application using [Playwright](https://playwright.dev/). These tests were developed as part of a technical interview to demonstrate automation skills and test design practices.

# ▶️ Running Tests

## ⚙️ Setup Instructions

1. Make sure Node.js (v16+) is installed.
2. Follow the Playwright setup guide:  
   👉 https://playwright.dev/docs/intro

   This includes:
   - Initializing your project
   - Installing Playwright Test
   - Downloading browsers

3. Install dependencies:

   ```bash
   npm install


## 🔐 Credentials

Create a `.env` file in the project root with the following variables:

```env
loginEmailHudl=youremail@email.com
loginPasswordHudl=yourpassword

📌 These values are required to run login tests. See .env.example for reference.

## ✅ 🎭 Playwright

Run the Playwright UI:
`npx playwright test --ui`

Run all tests in headless mode:
`npx playwright test`

Run all tests in headless mode:
`npx playwright test e2e/hudl-login-success.spec.js`

# 📌 Notes
[Playwright Docs](https://playwright.dev/)
