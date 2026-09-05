import { Page   } from "@playwright/test";
export class loginPage {
    constructor(
        private page : Page
    ) {}

    // locators 
    username = "//input[@placeholder='Enter username']";
    password = "//input[@placeholder='Enter password']";
    loginButton = "//button[@id='login-btn']";

    async open(){
          await this.page.goto('https://www.playwrightpad.in/sandbox/banking/');
    }

    async login (){
        await this.page.fill(this.username,'apex_user');
        await this.page.fill(this.password,'Password123!');
        await this.page.click(this.loginButton);
    }
}
