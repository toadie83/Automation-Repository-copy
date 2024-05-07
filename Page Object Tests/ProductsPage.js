class ProductsPage {
  constructor(browser) {
    this.browser = browser;
  }

  async navigateToProductPage() {
    await this.browser.url("https://automationexercise.com/products");
    await expect(this.browser).toHaveUrl(
      "https://automationexercise.com/products"
    );
  }
}

module.exports = ProductsPage;
