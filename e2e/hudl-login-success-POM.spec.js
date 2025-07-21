const { test } = require('@playwright/test');
const { MarketingPage } = require('../pages/MarketingPage');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

test('User can log in to Hudl', async ({ page }) => {
  const email = process.env.loginEmailHudl;
  const password = process.env.loginPasswordHudl;

  const market = new MarketingPage(page);
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await market.navigate();
  await market.clickLogin();
  await market.clickHudl();

  await login.verifyLogInPageLoads();
  await login.fillEmail(email);
  await login.clickContinueButton();
  await login.fillPassword(password);
  await login.clickContinueButton();

  await home.verifyHomePage();
});
