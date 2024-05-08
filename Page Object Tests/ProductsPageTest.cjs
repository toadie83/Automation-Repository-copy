const ProductsPage = require("./ProductsPage.cjs");

describe("Product Page Test", () => {
  it("tests ProductPageTest2", async () => {
    const productsPage = new ProductsPage(browser);

    await browser.setWindowSize(954, 932);
    await productsPage.navigateToProductPage();

    await productsPage.searchProduct("dress");

    await expect(browser).toHaveUrl(
      "https://automationexercise.com/products?search=dress"
    );

    await productsPage.clickBrandProductLink("Polo");
    await productsPage.clickBrandProductLink("H&M");
    await productsPage.clickBrandProductLink("Madame");
    await productsPage.clickBrandProductLink("Mast & Harbour");
    await productsPage.clickBrandProductLink("Babyhug");
    await productsPage.clickBrandProductLink("Allen Solly Junior");
    await productsPage.clickBrandProductLink("Kookie Kids");
    await productsPage.clickBrandProductLink("Biba");

    await productsPage.clickHomeLink();

    await expect(browser).toHaveUrl("https://automationexercise.com/products");
  });
});
