// import { test } from '@playwright/test';
// import { BeneficiaryPage } from '../pages/beneficiaryPage';
// import { TransferPage } from '../pages/transferPage';
// import bankingData from '../testData/loginData.json'; 
// import {AccountsSummaryPage} from '../pages/accountSummary';

// test('Create beneficiary and transfer funds', async ({ page }) => {
//     await page.goto('');
//     await page.getByRole('textbox', { name: 'Enter username' }).fill(bankingData.login.username);
//     await page.getByRole('textbox', { name: 'Enter password' }).fill(bankingData.login.password);
//     await page.getByRole('button', { name: 'LOGIN' }).click();
 
//     await page.waitForTimeout(1000);
 
//     // CREATE BENEFICIARY
//     const beneficiaryPage = new BeneficiaryPage(page);
//     await beneficiaryPage.clickFundsTransfer();
//     await beneficiaryPage.clickAddNew();
//     const beneficiary = bankingData.beneficiary;
//     await beneficiaryPage.fillBeneficiary(
//         beneficiary.name,
//         beneficiary.accountNumber,
//         beneficiary.bankName
//     );
//     await beneficiaryPage.saveBeneficiary();
// //////////
//     const transferPage = new TransferPage(page);
//     const transfer = bankingData.transfer;
//     // await transferPage.selectTransferType(transfer.transferType);
//     // await transferPage.selectFromAccount(transfer.fromAccount); 
//     // await transferPage.selectToAccount(transfer.toAccount);
//     await transferPage.enterTransferAmount(transfer.amount); 
//     await transferPage.executeTransfer();
// });
 
 

import { test } from '@playwright/test';
import { BeneficiaryPage } from '../pages/beneficiaryPage';
import { TransferPage } from '../pages/transferPage';
import bankingData from '../testData/loginData.json';
import { AccountsSummaryPage } from '../pages/accountSummary';
test('Create beneficiary and transfer funds', async ({ page }) => {
 
    await page.goto('');
 
    // LOGIN
    await page
        .getByRole('textbox', { name: 'Enter username' })
        .fill(bankingData.login.username);
 
    await page
        .getByRole('textbox', { name: 'Enter password' })
        .fill(bankingData.login.password);
 
    await page
        .getByRole('button', { name: 'LOGIN' })
        .click();
 
    // Wait after login
    await page.waitForTimeout(1000);
 
    // CREATE BENEFICIARY
    const beneficiaryPage = new BeneficiaryPage(page);
 
    await beneficiaryPage.clickFundsTransfer();
 
    await beneficiaryPage.clickAddNew();
 
    const beneficiary = bankingData.beneficiary;
 
    await beneficiaryPage.fillBeneficiary(
        beneficiary.name,
        beneficiary.accountNumber,
        beneficiary.bankName
    );
 
    await beneficiaryPage.saveBeneficiary();
 
    // TRANSFER
    const transferPage = new TransferPage(page);
    const transfer = bankingData.transfer;
 
    await transferPage.enterTransferAmount(transfer.amount);
    await transferPage.executeTransfer();
 
 
    //  OPEN ACCOUNTS SUMMARY
    const accountsSummaryPage = new AccountsSummaryPage(page);
    await accountsSummaryPage.openAccountsSummary();
 
    // VERIFY TRANSACTION HISTORY
 
    await accountsSummaryPage.verifyRecentTransaction(
        transfer.amount
    );
 
    // VERIFY ACCOUNT BALANCE
 
    const initialCheckingBalance = 4015;
    const transferAmount = Number(transfer.amount);
    const expectedCheckingBalance =
        initialCheckingBalance - transferAmount;
    await accountsSummaryPage.verifyCheckingBalance(
        `$${expectedCheckingBalance.toLocaleString('en-US')}.00`
    );
 
    // LOGOUT
    await accountsSummaryPage.logout();
});
 
 