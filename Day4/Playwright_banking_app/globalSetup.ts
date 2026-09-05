import { chromium, FullConfig } from '@playwright/test';
import bankingData from "./testData/loginData.json";
 
async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.playwrightpad.in/sandbox/banking/');
 
    const username = bankingData.login.username;
    const password = bankingData.login.password;

    await page.locator("//input[@placeholder='Enter username']").fill(username);
    await page.locator("//input[@placeholder='Enter password']").fill(password);
    await page.locator("//button[@id='login-btn']").click();
    await context.storageState({
        path: 'auth/user.json'
    });
    await context.close();
    await browser.close();
}
export default globalSetup;
