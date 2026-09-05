// import { expect, Page } from '@playwright/test';

// export class LoginPage {

//     constructor(private page: Page) {}

//     // Locators
//     private txtUser = '#user-name';
//     private txtPass = '#password';
//     private btnLogin = '#login-button';
//     private txtError = '[data-test="error"]';

//     async openApp() {
//         await this.page.goto('https://www.saucedemo.com/');
//     }

//     async enterValidCredentials() {
//         console.log('Entering valid credentials');

//         await this.page.fill(this.txtUser, 'standard_user');
//         await this.page.fill(this.txtPass, 'secret_sauce');
//     }

//     async enterInvalidCredentials() {
//         console.log('Entering invalid credentials');

//         await this.page.fill(this.txtUser, 'invalid_user');
//         await this.page.fill(this.txtPass, 'invalid_password');
//     }

//     async clickLoginButton() {
//         await this.page.click(this.btnLogin);
//     }

//     async validateSuccessfulLogin() {
//         await expect(this.page).toHaveURL(/inventory/);
//     }

//     async validateErrorMessage() {
//         await expect(this.page.locator(this.txtError)).toBeVisible();
//     }
// }

import { expect, Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    private txtUser = '#user-name';
    private txtPass = '#password';
    private btnLogin = '#login-button';
    private txtError = '[data-test="error"]';

    async openApp() {

        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterValidCredentials() {

        await this.page.fill(this.txtUser, 'standard_user');
        await this.page.fill(this.txtPass, 'secret_sauce');
    }

    async enterInvalidCredentials() {

        await this.page.fill(this.txtUser, 'invalid_user');
        await this.page.fill(this.txtPass, 'invalid_password');
    }

    async loginwithmultipleusers(
        username: string,
        password: string
    ) {

        await this.page.fill(this.txtUser, username);
        await this.page.fill(this.txtPass, password);
    }

    async clickLoginButton() {

        await this.page.click(this.btnLogin);
    }

    async validateSuccessfulLogin() {

        await expect(this.page).toHaveURL(/inventory/);
    }

    async validateErrorMessage() {

        await expect(
            this.page.locator(this.txtError)
        ).toBeVisible();
    }

    async validateLoginResult() {

        const currentUrl = this.page.url();

        if (currentUrl.includes('inventory')) {

            console.log('Login Successful');
        } else {

            await expect(
                this.page.locator(this.txtError)
            ).toBeVisible();

            console.log('Login Failed');
        }
    }
}