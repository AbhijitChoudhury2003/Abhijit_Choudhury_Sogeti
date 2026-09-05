import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/loginPage';
import { CustomWorld } from '../../support/world';

let login: LoginPage;

Given('I am on the login page', async function (this: CustomWorld) {

    login = new LoginPage(this.page);

    await login.openApp();
});

When('I enter valid username and password', async function () {

    await login.enterValidCredentials();
});

When('I enter invalid username and password', async function () {

    await login.enterInvalidCredentials();
});

When('I click on the login button', async function () {

    await login.clickLoginButton();
});

Then('I should be redirected to the dashboard page', async function () {

    await login.validateSuccessfulLogin();
});

Then(
    'I should see an error message indicating invalid credentials',
    async function () {

        await login.validateErrorMessage();
    }
);

When(
    'User enters {string} and {string}',
    async function (
        username: string,
        password: string
    ) {

        await login.loginwithmultipleusers(
            username,
            password
        );
    }
);

Then(
    'User should view the login result',
    async function () {

        await login.validateLoginResult();
    }
);
