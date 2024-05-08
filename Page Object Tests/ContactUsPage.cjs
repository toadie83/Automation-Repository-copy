class ContactUsPage {
  constructor(browser) {
    this.browser = browser;
  }

  async navigateToContactUsPage() {
    await this.browser.url("https://automationexercise.com/contact_us");
    await expect(this.browser).toHaveUrl(
      "https://automationexercise.com/contact_us"
    );
  }

  async fillNameInput(name) {
    const nameInput = await this.browser.$('//*[@data-qa="name"]');
    await nameInput.click();
    await nameInput.setValue(name);
  }

  async fillEmailInput(email) {
    const emailInput = await this.browser.$('//*[@data-qa="email"]');
    await emailInput.click();
    await emailInput.setValue(email);
  }

  async fillSubjectInput(subject) {
    const subjectInput = await this.browser.$('//*[@data-qa="subject"]');
    await subjectInput.click();
    await subjectInput.setValue(subject);
  }

  async fillMessageInput(message) {
    const messageInput = await this.browser.$('//*[@data-qa="message"]');
    await messageInput.click();
    await messageInput.setValue(message);
  }

  async clickSubmitButton() {
    const submitButton = await this.browser.$('//*[@data-qa="submit-button"]');
    await submitButton.click();
  }
}

module.exports = ContactUsPage;
