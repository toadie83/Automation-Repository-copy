describe("login and logout", () => {
  it("tests login and logout", async () => {
    await browser.setWindowSize(1454, 957)
    await browser.url("https://automationexercise.com/login")
    await expect(browser).toHaveUrl("https://automationexercise.com/login")
    await browser.$("//*[@data-qa=\"login-email\"]").click()
    await browser.$("//*[@data-qa=\"login-email\"]").setValue("logintest@")
    await browser.$("//*[@data-qa=\"login-email\"]").setValue("logintest@autotest.com")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@data-qa=\"login-password\"]").setValue("1234567890aB")
    await browser.$("//*[@data-qa=\"login-button\"]").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/products")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[9]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/contact_us")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[3]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/view_cart")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/products")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[4]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/login")
  });
});
