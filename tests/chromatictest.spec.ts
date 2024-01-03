import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Book Store", async ({ page },testInfo) => {
 await page.goto("https://automationbookstore.dev/");

 await expect(page).toHaveTitle("Automation Bookstore");

 await page.locator('[id="searchBar"]').fill('Playwright');

 await page.keyboard.press('Enter');

 await takeArchive(page, "Home Page" ,testInfo);

 await page.locator('[title="Clear text"]').click();
});