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

  async fillContactForm(name, email, subject, message) {
    await (await this.browser.$("[data-qa='name']")).click();
    await (await this.browser.$("[data-qa='name']")).setValue(name);

    await (await this.browser.$("[data-qa='email']")).click();
    await (await this.browser.$("[data-qa='email']")).setValue(email);

    await (await this.browser.$("[data-qa='subject']")).click();
    await (await this.browser.$("[data-qa='subject']")).setValue(subject);

    await (await this.browser.$("[data-qa='message']")).click();
    await (await this.browser.$("[data-qa='message']")).setValue(message);
  }
}

module.exports = ContactUsPage;
