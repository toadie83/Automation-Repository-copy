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

  async searchProduct(keyword) {
    const searchInput = await this.browser.$("#search_product");
    await searchInput.click();
    await searchInput.setValue(keyword);
    const searchButton = await this.browser.$("#submit_search");
    await searchButton.click();
  }

  async clickBrandProductLink(brandName) {
    const brandProductLink = await this.browser.$(
      `.brands-name a[href*="${brandName}"]`
    );
    await brandProductLink.click();
  }

  async clickHomeLink() {
    const homeLink = await this.browser.$(
      "/html/body/section/div/div[1]/ol/li[1]/a"
    );
    await homeLink.click();
  }
}

module.exports = ProductsPage;
