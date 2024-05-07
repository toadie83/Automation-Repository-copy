class LoginPage {
  constructor(browser) {
    this.browser = browser;
  }

  async navigateToLoginPage() {
    await this.browser.url("https://automationexercise.com/login");
    await expect(this.browser).toHaveUrl(
      "https://automationexercise.com/login"
    );
  }

  async fillEmailInput(email) {
    const emailInput = await this.browser.$('//*[@data-qa="login-email"]');
    await emailInput.click();
    await emailInput.setValue(email);
  }

  async fillPasswordInput(password) {
    const passwordInput = await this.browser.$(
      '//*[@data-qa="login-password"]'
    );
    await passwordInput.click();
    await passwordInput.setValue(password);
  }

  async clickLoginButton() {
    const loginButton = await this.browser.$('//*[@data-qa="login-button"]');
    await loginButton.click();
  }
}

module.exports = LoginPage;
