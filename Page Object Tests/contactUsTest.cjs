const ContactUsPage = require("./ContactUsPage.cjs");

describe("contactUsTest", () => {
  let contactUsPage;

  beforeEach(async () => {
    contactUsPage = new ContactUsPage(browser);
    await browser.setWindowSize(1168, 932);
  });

  it("tests contactUsTest", async () => {
    await contactUsPage.navigateToContactUsPage();

    await contactUsPage.fillNameInput("test");

    await contactUsPage.fillEmailInput("test@tester.com");

    await contactUsPage.fillSubjectInput("Any subject");

    await contactUsPage.fillMessageInput("Test message, lorem ipsum etc...");

    await contactUsPage.clickSubmitButton();
  });
});
