import { test, expect } from '@playwright/test';
const { goToHudlHomePageRedirect } = require('../helpers/navigation');

test.describe('Verify Hudl Log In links', () => {

    test.beforeEach(async ({ page }) => {
        // Go to Hudl homepage using redirect helper function to shortcut the login flow steps
        await goToHudlHomePageRedirect(page);

        // Verify login page is displayed
        await expect(page).toHaveURL(/\/u\/login\/identifier/);
        await expect(page.locator('#username')).toBeVisible();
    });

    test('verify Privacy Policy', async ({ page }) => {
        const privacyPolicy = page.getByRole('link', { name: 'Privacy Policy' });
        await expect(privacyPolicy).toBeVisible();
        await expect(privacyPolicy).toHaveAttribute('href', 'https://www.hudl.com/privacy');
        await expect(privacyPolicy).toHaveAttribute('target', '_blank');
    });

    test('verify Terms of Service', async ({ page }) => {
        const termsLink = page.getByRole('link', { name: 'Terms of Service' });
        await expect(termsLink).toBeVisible();
        await expect(termsLink).toHaveAttribute('href', 'https://www.hudl.com/terms');
        await expect(termsLink).toHaveAttribute('target', '_blank');
    });
});
