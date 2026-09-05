import { Page, expect } from '@playwright/test';
 
export class AccountsSummaryPage {
 
    constructor(private page: Page) {}
 
    async openAccountsSummary() {
        await this.page.locator("//button[@id='tab-dashboard']").click();
    }
 
    async verifyRecentTransaction(amount: string) {
        const transactionAmount =
            Number(amount).toFixed(2);
        const transactionRow = this.page
                .locator('#transactions-table tbody tr')
                .filter({
                    hasText: 'Internal Transfer checking to savings'
                });
 
        await expect(transactionRow).toBeVisible();
        await expect(transactionRow).toContainText(transactionAmount);
    }
 
    async verifyCheckingBalance(expectedBalance: string) {
        const checkingAccount =this.page.locator('.card-complex[data-account="checking"]');
 
        const balance =checkingAccount.locator('.balance');
 
        // await expect(balance).toHaveText(
        //     expectedBalance
        // );
    }
 
    async logout() {
        await this.page.locator("//button[normalize-space()='Sign Out']").click();
    }
}