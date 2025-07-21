const { expect } = require('@playwright/test');
const { getByQaId } = require('../utils/selectors');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL(/hudl\.com\/home/);
    await expect(getByQaId(this.page, 'webnav-globalnav-home')).toHaveText('Home');
  }
}

module.exports = { HomePage };
