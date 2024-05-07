describe("newuser", () => {
  it("tests newuser", async () => {
    await browser.setWindowSize(1437, 959);
    await browser.url("https://automationexercise.com/");
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
      .click();
    await expect(browser).toHaveUrl("https://automationexercise.com/login");
    await browser.$('//*[@data-qa="signup-name"]').click();
    await browser.$('//*[@data-qa="signup-name"]').setValue("tre tre");
    await browser.$('//*[@data-qa="signup-email"]').click();
    await browser.$('//*[@data-qa="signup-email"]').setValue("tre@");
    await browser.$('//*[@data-qa="signup-email"]').setValue("tre@test.com");
    await browser.$('//*[@data-qa="signup-button"]').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/signup");
    await browser.$("#id_gender1").click();
    await browser.$('//*[@data-qa="password"]').click();
    await browser.$('//*[@data-qa="password"]').setValue("1234567890aB");
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
    await browser.$('//*[@data-qa="first_name"]').setValue("tree");
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
    await browser.$('//*[@data-qa="last_name"]').setValue("tree");
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
    await browser.$('//*[@data-qa="address"]').setValue("123 rew");
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
    await browser.$('//*[@data-qa="state"]').setValue("treee");
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
    await browser.$('//*[@data-qa="city"]').setValue("23eee");
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
    await browser.$('//*[@data-qa="zipcode"]').setValue("fghttt");
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
    await browser.$('//*[@data-qa="mobile_number"]').setValue("012334444433");
    await browser.$('//*[@data-qa="create-account"]').click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/account_created"
    );
    await browser.$('//*[@data-qa="continue-button"]').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/");
    await browser
      .$('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a')
      .click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/delete_account"
    );
    await browser.$('//*[@data-qa="continue-button"]').click();
    await expect(browser).toHaveUrl("https://automationexercise.com/");
  });
});
