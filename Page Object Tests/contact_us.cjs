const { expect } = await import("chai");
const ContactUsPage = await import("./ContactUsPage.cjs");

describe("Contact Us Form Submission", () => {
  let contactUsPage;

  //initialize the ContactUsPage
  before(() => {
    contactUsPage = new ContactUsPage(browser);
  });

  // submit the contact us form
  it("submits contact us form with test data", async () => {
    // Navigate to contact us page
    await contactUsPage.navigateToContactUsPage();

    // contact form fields
    await contactUsPage.fillContactForm(
      "test",
      "frosttrev@gmail.com",
      "test",
      "test entry"
    );
  });
});
