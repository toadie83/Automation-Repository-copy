class HomePage {
  constructor(browser) {
    this.browser = browser;
  }

  async navigateToHomePage() {
    await this.browser.url("https://automationexercise.com/");
  }

  async clickSliderButton() {
    const sliderButton = await this.browser.$(
      '//*[@id="slider-carousel"]/a[2]/i'
    );
    await sliderButton.click();
  }

  async clickAccordionItem(index) {
    const accordionItem = await this.browser.$(
      `//*[@id="accordian"]/div[${index}]/div[1]/h4/a`
    );
    await accordionItem.click();
  }

  async clickLogo() {
    const logo = await this.browser.$(
      '//*[@id="header"]/div/div/div/div[1]/div/a/img'
    );
    await logo.click();
  }

  async clickTestCaseButton() {
    const testCaseButton = await this.browser.$(
      '//*[@id="slider-carousel"]/div/div[1]/div[1]/a[1]/button'
    );
    await testCaseButton.click();
  }

  async clickHomeLink() {
    const homeLink = await this.browser.$(
      '//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a'
    );
    await homeLink.click();
  }

  async clickAPIListButton() {
    const APIListButton = await this.browser.$(
      '//*[@id="slider-carousel"]/div/div[1]/div[1]/a[2]/button'
    );
    await APIListButton.click();
  }
}

module.exports = HomePage;
