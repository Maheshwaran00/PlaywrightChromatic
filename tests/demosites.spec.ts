import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Demoblaze", async ({ page },testInfo) => {
    
 await page.goto("https://www.demoblaze.com/");

 await expect(page).toHaveTitle("STORE");

 await page.locator('//span[text()="Next"]').nth(0).click();

 await takeArchive(page, "First slide", testInfo);

 await page.locator('//span[text()="Next"]').nth(0).click();

 await takeArchive(page, "Second slide", testInfo);

 await page.locator('[id="itemc"]').nth(0).click();

 await page.waitForTimeout(1000);
 
 await takeArchive(page, "Phones Page", testInfo);

});