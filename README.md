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
```
📌 These values are required to run login tests. See `.env.example` for reference.

## 🎭 Playwright

Run the Playwright UI:
`npx playwright test --ui`

Run all tests in headless mode:
`npx playwright test`

Run all tests in headless mode:
`npx playwright test e2e/hudl-login-success.spec.js`


# 🔧 Notes & Potential Improvements
- Log in navigation: I explored ways to shortcut directly to the login page and found that navigating to https://www.hudl.com/home redirects unauthenticated users to the login flow. For this project, I included tests that cover both direct login and redirected paths. Depending on how users typically arrive at the login page, one approach may be sufficient.

- Command and helper structure: I started with a minimal set of helpers for this exercise. Reusable commands could be added to reduce repetition further, depending on Hudl’s preferred automation patterns.

- Test data strategy: The tests currently use real credentials. In a production setting, these should be replaced with test accounts or dynamically created data that is cleaned up after each run.

- I approach end-to-end testing with the customer in mind, prioritizing scenarios that reflect real user behavior, ensure high-confidence coverage of critical flows, and verify the text and interactions users actually experience.

- Additional coverage opportunities:

   - Third-party login options (Google, Facebook, Apple)

   - Password reset workflow

   - Create account workflow

   - Edit email address workflow during login
