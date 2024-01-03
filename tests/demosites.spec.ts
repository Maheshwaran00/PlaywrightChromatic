import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Dashboard", async ({ page },testInfo) => {
 await page.goto("https://www.demoblaze.com/");

 await expect(page).toHaveTitle("Product Store");

 await page.locator('//span[text()="Next"]').nth(0).click();

 await takeArchive(page, testInfo);

 await page.locator('//span[text()="Next"]').nth(0).click();

 await takeArchive(page, testInfo);

 await page.locator('[id="itemc"]').nth(0).click();
 // 👇 Take a screenshot once the dialog is located
 // ➖ Remove this line
 // page.screenshot();
 // ➕ Add this line
 await takeArchive(page, testInfo);

});