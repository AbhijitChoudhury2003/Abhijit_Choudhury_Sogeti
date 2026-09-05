import { Page } from '@playwright/test';
 
export class TransferPage {
 
    constructor(private page: Page) {}
 
    async enterTransferAmount(amount: string) {
        await this.page.locator("//input[@id='transfer-amount']")
            // .getByRole('spinbutton', { name: 'TRANSFER AMOUNT ($)' })
            .fill(amount);
    }
 
    async executeTransfer() {
        await this.page.locator("//button[@id='exec-transfer']")
            // .getByRole('button', { name: 'Secure Transfer' })
            .click();
    }
}
 
 