import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
  });
});
