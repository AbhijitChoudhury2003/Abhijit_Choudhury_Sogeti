import {test , expect } from '@playwright/test'
import { loginPage } from '../pages/loginPage';

test('Login ' , async({page}) => {
let lp = new loginPage(page);
await lp.open();
await lp.login();
await page.pause();
});
