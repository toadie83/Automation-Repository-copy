describe("Checkout, including Payment Details", () => {
  it("tests Checkout, including Payment Details", async () => {
    await browser.setWindowSize(1437, 957);
    await browser.url("https://automationexercise.com/");
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
      .click();
    await expect(browser).toHaveUrl("https://automationexercise.com/login");
    await browser.$('//*[@data-qa="login-email"]').click();
    await browser
      .$('//*[@data-qa="login-email"]')
      .setValue("logintest@autotest.com");
    await browser.$('//*[@data-qa="login-password"]').click();
    await browser.$('//*[@data-qa="login-password"]').setValue("1234567890aB");
    await browser.$('//*[@data-qa="login-button"]').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a')
      .click();
    await expect(browser).toHaveUrl("https://automationexercise.com/products");
    await browser.$('//*[@id="accordian"]/div[1]/div[1]/h4/a').click();
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
      "https://automationexercise.com/category_products/7"
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
      "https://automationexercise.com/product_details/39"
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
    await browser.$('//*[@id="do_action"]/div[1]/div/div/a').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/checkout");
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
    await expect(browser).toHaveUrl("https://automationexercise.com/payment");
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyUp", value: "" }],
      },
    ]);
    await browser.$('//*[@data-qa="name-on-card"]').click();
    await browser
      .$('//*[@data-qa="name-on-card"]')
      .setValue("4121412141214444");
    await browser.$('//*[@data-qa="name-on-card"]').click();
    await browser.$('//*[@data-qa="name-on-card"]').setValue("test user");
    await browser.$('//*[@data-qa="card-number"]').click();
    await browser.$('//*[@data-qa="card-number"]').setValue("4121412141214444");
    await browser.$('//*[@data-qa="cvc"]').click();
    await browser.$('//*[@data-qa="cvc"]').setValue("123");
    await browser.$('//*[@data-qa="expiry-month"]').click();
    await browser.$('//*[@data-qa="expiry-month"]').setValue("12");
    await browser.$('//*[@data-qa="expiry-year"]').click();
    await browser.$('//*[@data-qa="expiry-year"]').setValue("2028");
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
    await browser.$('//*[@data-qa="pay-button"]').click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/payment_done/3000"
    );
    await browser.$('//*[@data-qa="continue-button"]').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
      .click();
    await expect(browser).toHaveUrl("https://automationexercise.com/login");
  });
});
