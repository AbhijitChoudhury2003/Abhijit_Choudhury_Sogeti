import { Page } from '@playwright/test';
 
export class BeneficiaryPage {
    constructor(private page: Page) {}
 
    async clickFundsTransfer() {
        await this.page
            .locator("//button[@id='tab-transfers']")
            .click();
    }
    async clickAddNew() {
        await this.page
            .locator("//button[@id='add-beneficiary']")
            .click();
    }
    async fillBeneficiary(
        name: string,
        accountNumber: string,
        bankName: string
    ) {
        await this.page.locator("//input[@id='bene-name']").fill(name);
        await this.page.locator("//input[@id='bene-account']").fill(accountNumber);
        await this.page.locator("//select[@id='bene-bank']").selectOption({label: bankName});
    }
    async saveBeneficiary() {
        await this.page.locator('//button[@id="save-bene"]').click();
    }
}
 