import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Dashboard", async ({ page },testInfo) => {
 await page.goto("https://uat.quiklyz.com/");

 await page.locator('text="Chennai"').click();

 await expect(page).toHaveTitle(/Quiklyz/);

 const expandButton = page.locator('text="Find Cars"').nth(0);

 await expandButton.click();

 const dialog = page.locator("[title]").nth(0);

 // 👇 Take a screenshot once the dialog is located
 // ➖ Remove this line
 // page.screenshot();
 // ➕ Add this line
 await takeArchive(page, testInfo);

 await dialog.click();
});