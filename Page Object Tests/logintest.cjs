const LoginPage = require("./LoginPage.cjs");

describe("Login Page Test", () => {
  let loginPage;

  beforeEach(async () => {
    loginPage = new LoginPage(browser);
    await browser.setWindowSize(1596, 1063);
  });

  it("tests LoginPage", async () => {
    const loginPage = new LoginPage(browser);

    await loginPage.navigateToLoginPage();

    await loginPage.fillEmailInput("logintest@autotest.com");

    await loginPage.fillPasswordInput("1234567890aB");

    await loginPage.clickLoginButton();

    await expect(browser).toHaveUrl("https://automationexercise.com/");
  });
});
