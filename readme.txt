Chromatic With Playwright:

Refer the below url for guidance

https://www.chromatic.com/docs/e2e-visual-tests/

1-Install playwright

2-Install chromaui archives and story book using below command 

npm add --dev @chromaui/test-archiver @chromaui/archive-storybook @storybook/cli @storybook/addon-essentials @storybook/server-webpack5 react react-dom

3-Write test scripts with take archive steps

ex:- 

import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Book Store", async ({ page },testInfo) => {

 await page.goto("requiredUrl");

 await expect(page).toHaveTitle("Page Title");

 await page.locator('textBox').fill('Input');

 await page.keyboard.press('Enter');

 await takeArchive(page, "Name related to this archive" ,testInfo);

 await page.locator('remove text').click();
 
});

4-Commit the scripts to cloud repository

5-Connect the repository to chromatic platform

6-Install chromatic in local

7-Copy project <token> from the chromatic website

8-Paste in the below command and run in local folder

npx chromatic@latest --build-script-name=build-archive-storybook -t=<token>  

9-Open Url which is presented in the console.(ctrl+click)

10-If changes are found, the verify option will be available or only the image will be displayed there.  