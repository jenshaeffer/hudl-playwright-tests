import { test, expect } from '@playwright/test';
import { getByQaId } from '../utils/selectors';
const { goToHudlHomePage } = require('../helpers/navigation');

test('User can log in to Hudl', async ({ page }, testInfo) => {
    const email = process.env.loginEmailHudl;
    const password = process.env.loginPasswordHudl;

    // Go to Hudl homepage
    await goToHudlHomePage(page);

    // Click "Log In" in the top-right
    await expect(getByQaId(page, 'login-select')).toHaveText('Log in');
    await getByQaId(page, 'login-select').click();

    // Click "Hudl"
    await expect(getByQaId(page, 'login-hudl')).toHaveText('Hudl');
    await getByQaId(page, 'login-hudl').click();

    // Verify login page is displayed
    await expect(page).toHaveURL(/\/u\/login\/identifier/);
    await expect(page.locator('#username')).toBeVisible();

    // Fill in email to the login form
    await page.fill('#username', email);

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

    // Verify that login was successful
    await expect(page).toHaveURL(/hudl\.com\/home/);
    await expect(getByQaId(page, 'webnav-globalnav-home')).toHaveText('Home');
});
