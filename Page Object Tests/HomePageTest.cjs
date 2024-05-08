const HomePage = require("./HomePage.cjs");

describe("Home Page Test", () => {
  it("tests HomePageTest", async () => {
    const homePage = new HomePage(browser);

    await browser.setWindowSize(954, 932);
    await homePage.navigateToHomePage();

    await homePage.clickSliderButton();
    await homePage.clickAccordionItem(1);
    await homePage.clickAccordionItem(2);
    await homePage.clickAccordionItem(3);
    await homePage.clickLogo();
    await homePage.clickTestCaseButton();
    await homePage.clickHomeLink();
    await homePage.clickAPIListButton();
    await homePage.clickHomeLink();
  });
});
