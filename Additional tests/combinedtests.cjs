const LoginPage = require("../Page Object Tests/LoginPage.cjs");
const ContactUsPage = require("../Page Object Tests/ContactUsPage.cjs");
const HomePage = require("../Page Object Tests/HomePage.cjs");
const ProductsPage = require("../Page Object Tests/ProductsPage.cjs");

describe("Combined Page Objects Test", () => {
  let loginPage;
  let contactUsPage;
  let homePage;
  let productsPage;

  beforeEach(async () => {
    loginPage = new LoginPage(browser);
    contactUsPage = new ContactUsPage(browser);
    homePage = new HomePage(browser);
    productsPage = new ProductsPage(browser);
    await browser.setWindowSize(1302, 1182);
  });

  it("should validate homepage, login, test products and then submit a contact form", async () => {
    // tests homepage
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

    // Perform login actions
    await loginPage.navigateToLoginPage();
    await loginPage.fillEmailInput("logintest@autotest.com");
    await loginPage.fillPasswordInput("1234567890aB");
    await loginPage.clickLoginButton();
    await expect(browser).toHaveUrl("https://automationexercise.com/");

    // Tests the product links
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

    // Perform contact form actions
    await contactUsPage.navigateToContactUsPage();
    await contactUsPage.fillNameInput("test");
    await contactUsPage.fillEmailInput("test@tester.com");
    await contactUsPage.fillSubjectInput("Any subject");
    await contactUsPage.fillMessageInput("Test message, lorem ipsum etc...");
    await contactUsPage.clickSubmitButton();
  });
});
