# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: banking.spec.ts >> Create beneficiary and transfer funds
- Location: tests\banking.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter username' })

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { BeneficiaryPage } from '../pages/beneficiaryPage';
  3  | import { TransferPage } from '../pages/transferPage';
  4  | import bankingData from '../testData/loginData.json';
  5  |  
  6  | test('Create beneficiary and transfer funds', async ({ page }) => {
  7  |  
  8  |     // await page.goto('');
  9  |  
  10 |     // LOGIN
  11 |     await page
  12 |         .getByRole('textbox', { name: 'Enter username' })
> 13 |         .fill(bankingData.login.username);
     |          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  14 |  
  15 |     await page
  16 |         .getByRole('textbox', { name: 'Enter password' })
  17 |         .fill(bankingData.login.password);
  18 |  
  19 |     await page
  20 |         .getByRole('button', { name: 'LOGIN' })
  21 |         .click();
  22 |  
  23 |     // Wait after login
  24 |     await page.waitForTimeout(1000);
  25 |  
  26 |     // CREATE BENEFICIARY
  27 |     const beneficiaryPage = new BeneficiaryPage(page);
  28 |  
  29 |     await beneficiaryPage.clickFundsTransfer();
  30 |  
  31 |     await beneficiaryPage.clickAddNew();
  32 |  
  33 |     const beneficiary = bankingData.beneficiary;
  34 |  
  35 |     await beneficiaryPage.fillBeneficiary(
  36 |         beneficiary.name,
  37 |         beneficiary.accountNumber,
  38 |         beneficiary.bankName
  39 |     );
  40 |  
  41 |     await beneficiaryPage.saveBeneficiary();
  42 |  
  43 |     // TRANSFER
  44 |     const transferPage = new TransferPage(page);
  45 |  
  46 |     const transfer = bankingData.transfer;
  47 |  
  48 |     // await transferPage.selectTransferType(transfer.transferType);
  49 |     // await transferPage.selectFromAccount(transfer.fromAccount); 
  50 |     // await transferPage.selectToAccount(transfer.toAccount);
  51 | 
  52 |     await transferPage.enterTransferAmount(transfer.amount); 
  53 |     await transferPage.executeTransfer();
  54 | });
  55 |  
  56 |  
```