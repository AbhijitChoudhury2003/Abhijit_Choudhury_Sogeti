
import { Before,After} from '@cucumber/cucumber';
import {chromium,Browser,Page} from '@playwright/test';
import { CustomWorld } from '../support/world';

let browser: Browser;
Before(async () => {

    browser = await chromium.launch({
        headless: false
    });

    const context =
        await browser.newContext();

    CustomWorld.prototype.page =
        await context.newPage();
});

After(async () => {

    await CustomWorld.prototype.page.close();
    await browser.close();
});


    
