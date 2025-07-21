const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async verifyLogInPageLoads() {
    await expect(this.page).toHaveURL(/\/u\/login\/identifier/);
  }

  async fillEmail(email) {
    await expect(this.page.locator('#username')).toBeVisible();
    await this.page.fill('#username', email);
  }

  async clickContinueButton() {
    await expect(this.page.locator('button[name="action"]')).toHaveText('Continue');
    await this.page.click('button[name="action"]');
  }

  async fillPassword(password) {
    await expect(this.page.locator('#password')).toBeVisible();
    await this.page.fill('#password', password);
  }
}

module.exports = { LoginPage };
