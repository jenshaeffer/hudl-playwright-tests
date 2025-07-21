const { expect } = require('@playwright/test');

// Hudl homepage navigation helper
async function goToHudlHomePage(page) {
  await page.goto('https://www.hudl.com/');
}

// Shortcut to Hudl Log In navigation helper will redirect to the login page directly
async function goToHudlHomePageRedirect(page) {
  await page.goto('https://www.hudl.com/home');
}

module.exports = {
  goToHudlHomePage,
  goToHudlHomePageRedirect,
};
