class HomePage {
  constructor(browser) {
    this.browser = browser;
  }

  async navigateToHomePage() {
    await this.browser.url("https://automationexercise.com/");
    await expect(this.browser).toHaveUrl("https://automationexercise.com/");
  }
}

module.exports = HomePage;
