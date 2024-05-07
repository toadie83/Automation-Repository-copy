const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function launchChrome() {
  // Set Chrome options
  const options = new chrome.Options();
  options.addArguments("start-maximized");

  // Create WebDriver instance
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  console.log("Chrome WebDriver launched successfully!");

  // You can optionally navigate to a specific URL here or perform other actions
  // For example:
  // await driver.get('https://www.example.com');

  // Don't quit the WebDriver session
  // This will keep the browser window open until you manually close it

  // Uncomment the following line if you want to wait indefinitely
  // await new Promise(() => {});
}

// Call the function to launch Chrome WebDriver
launchChrome().catch((err) => console.error(err));
