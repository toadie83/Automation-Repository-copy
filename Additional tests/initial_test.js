describe("initial_test", () => {
  it("tests initial_test", async () => {
    await browser.setWindowSize(1207, 838);
    await browser.url("https://automationexercise.com/");
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser.$("#header li:nth-of-type(2) > a").click();
    await expect(browser).toHaveUrl("https://automationexercise.com/products");
    await browser.$("#header li:nth-of-type(3) > a").click();
    await expect(browser).toHaveUrl("https://automationexercise.com/view_cart");
    await browser.$("#header li:nth-of-type(1) > a").click();
    await expect(browser).toHaveUrl("https://automationexercise.com/");
  });
});
