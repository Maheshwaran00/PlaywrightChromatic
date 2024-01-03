import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Dashboard", async ({ page },testInfo) => {
 await page.goto("https://automationbookstore.dev/");

 await expect(page).toHaveTitle("Automation Bookstore");

 await page.locator('[id="searchBar"]').fill('Playwright');

 await page.keyboard.press('Enter');

 // 👇 Take a screenshot once the dialog is located
 // ➖ Remove this line
 // page.screenshot();
 // ➕ Add this line
 await takeArchive(page, testInfo);

 await page.locator('[title="Clear text"]').click();
});