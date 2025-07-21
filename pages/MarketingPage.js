const { expect } = require('@playwright/test');
const { getByQaId } = require('../utils/selectors');

class MarketingPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.hudl.com/');
  }

  async clickLogin() {
    await expect(getByQaId(this.page, 'login-select')).toHaveText('Log in');
    await getByQaId(this.page, 'login-select').click();
  }

  async clickHudl() {
    await expect(getByQaId(this.page, 'login-hudl')).toHaveText('Hudl');
    await getByQaId(this.page, 'login-hudl').click();
  }
}

module.exports = { MarketingPage };
