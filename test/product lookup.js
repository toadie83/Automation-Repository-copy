describe("product lookup", () => {
  it("tests product lookup", async () => {
    await browser.setWindowSize(1596, 1063)
    await browser.url("https://automationexercise.com/")
    await expect(browser).toHaveUrl("https://automationexercise.com/")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/products")
    await browser.$("#search_product").click()
    await browser.$("#search_product").setValue("dress")
    await browser.$("#submit_search").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/products?search=dress")
    await browser.$("//*[@id=\"accordian\"]/div[1]/div[1]/h4/a").click()
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
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://automationexercise.com/category_products/2")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"accordian\"]/div[2]/div[1]/h4/a").click()
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
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://automationexercise.com/category_products/6")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"accordian\"]/div[3]/div[1]/h4/a").click()
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
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://automationexercise.com/category_products/4")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("/html/body/section/div/div[2]/div[2]/div/div[2]/div/div[2]/ul/li/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/product_details/16")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/products")
    await browser.$("//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[1]/a").click()
    await expect(browser).toHaveUrl("https://automationexercise.com/")
  });
});
