describe("Add to Basket and Edit Basket", () => {
  it("tests Add to Basket and Edit Basket", async () => {
    await browser.setWindowSize(1596, 1063);
    await browser.url("https://automationexercise.com/");
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a')
      .click();
    await expect(browser).toHaveUrl("https://automationexercise.com/products");
    await browser.$('//*[@id="accordian"]/div[3]/div[1]/h4/a').click();
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/category_products/5"
    );
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser
      .$("/html/body/section/div/div[2]/div[2]/div/div[2]/div/div[2]/ul/li/a")
      .click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/product_details/11"
    );
    await browser
      .$("/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button")
      .click();
    const button = await browser.$(
      '//*[@id="cartModal"]/div/div/div[3]/button'
    );
    await button.waitForClickable();
    await button.click();

    await browser.$('//*[@id="accordian"]/div[2]/div[1]/h4/a').click();
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "" }],
      },
    ]);
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/category_products/3"
    );
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser
      .$("/html/body/section/div/div[2]/div[2]/div/div[2]/div/div[2]/ul/li/a")
      .click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/product_details/2"
    );
    await browser
      .$("/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button")
      .click();
    const button2 = await browser.$(
      '//*[@id="cartModal"]/div/div/div[2]/p[2]/a/u'
    );
    await button2.waitForClickable();
    await button2.click();
    await expect(browser).toHaveUrl("https://automationexercise.com/view_cart");
    await browser.$('//*[@id="product-2"]/td[6]/a').click();
    await browser.$('//*[@id="do_action"]/div[1]/div/div/a').click();
  });
});
