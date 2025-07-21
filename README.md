# 📘 Hudl E2E Tests (Playwright)
This project contains end-to-end (E2E) tests for the [Hudl](https://www.hudl.com/) web application using [Playwright](https://playwright.dev/). These tests were developed as part of a technical interview to demonstrate automation skills and test design practices.

# 🗂 Folder Structure
test/
├── playwright.config.js # Playwright configuration
├── e2e/
│ ├── login.spec.js # Login tests
│ └── ... # Other test files
├── utils/
│ ├── selectors.js # Custom selector helpers
│ └── helpers.js # Navigation or utility functions
└── README.md    # You're here

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


## Credentials
Create a .env file with your credentials:
`loginEmailHudl: 'your@email.com'`,
`loginPasswordHudl: 'yourpassword'`,

## ✅ 🎭 Playwright

Run the Playwright UI:
`npx playwright test --ui`

Run all tests in headless mode:
`npx playwright test`

Run all tests in headless mode:
`npx playwright test e2e/hudl-login-success.spec.js`

# 📌 Notes
[Playwright Docs](https://playwright.dev/)
