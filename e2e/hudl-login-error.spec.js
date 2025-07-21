import { test, expect } from '@playwright/test';
const { goToHudlHomePageRedirect } = require('../helpers/navigation');

test.describe('Hudl login error handling', () => {

    test.beforeEach(async ({ page }) => {
        // Go to Hudl homepage using redirect helper function to shortcut the login flow steps
        await goToHudlHomePageRedirect(page);

        // Verify login page is displayed
        await expect(page).toHaveURL(/\/u\/login\/identifier/);
        await expect(page.locator('#username')).toBeVisible();
    });

    test('shows error for blank email', async ({ page }) => {
        // Click "Continue"
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Verify error message
        await expect(page.locator('#error-cs-email-required')).toHaveText('Enter an email address');
    });

    test('shows error for invalid email format', async ({ page }) => {
        // Fill in email to the login form
        await page.fill('#username', 'wrong');

        // Click "Continue"
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Verify error message
        await expect(page.locator('#error-cs-email-invalid')).toHaveText('Enter a valid email.');
    });

    test('shows error for blank password', async ({ page }) => {
        // Fill in email to the login form
        await page.fill('#username', 'wrongemail@gmail.com');

        // Click "Continue" to go to password page
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Click "Continue"
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Verify error message
        await expect(page.getByText('Enter your password')).toBeVisible();
    });

    test('shows error for invalid credentials', async ({ page }, testInfo) => {
        const password = process.env.loginPasswordHudl;

        // Fill in email to the login form
        await page.fill('#username', 'wrongemail@gmail.com');

        // Click "Continue"
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Verify password field is displayed
        await expect(page.locator('#password')).toBeVisible();

        // Fill in password to the login form
        await page.fill('#password', password);

        // Click "Continue"
        await expect(page.locator('button[name="action"]')).toHaveText('Continue');
        await page.click('button[name="action"]');

        // Verify error message
        await expect(page.locator('#error-element-password')).toHaveText('Incorrect username or password.');
    });
});
