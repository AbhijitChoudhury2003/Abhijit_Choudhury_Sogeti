# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: banking.spec.ts >> Create beneficiary and transfer funds
- Location: tests\banking.spec.ts:6:5

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('//select[@id=\'from-acc\']')
    - locator resolved to <select id="from-acc" class="terminal-input">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    29 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms
    - waiting for element to be visible and enabled

```

# Test source

```ts
  1  | // import { Page } from "@playwright/test";
  2  | 
  3  | // export class fundTransfer{
  4  | //     constructor(
  5  | //         private page: Page
  6  | //     ){}
  7  | 
  8  | //     //locators
  9  | //     fundTransfer = 'button[id="tab-transfers"]';
  10 | 
  11 | // }
  12 | 
  13 | import { Page } from '@playwright/test';
  14 |  
  15 | export class TransferPage {
  16 |     constructor(private page: Page) {}
  17 |  
  18 |     async selectTransferType(transferType: string) {
  19 |        // await this.page.getByRole('combobox', { name: 'TRANSFER TYPE' }).selectOption({ label: transferType });
  20 |        await this.page.locator("//select[@id='transfer-type']");
  21 |     }
  22 |  
  23 |     async selectFromAccount(fromAccount: string) {
  24 |         await this.page
  25 |             .locator("//select[@id='from-acc']")
> 26 |             .selectOption({ label: fromAccount });
     |              ^ Error: locator.selectOption: Target page, context or browser has been closed
  27 |     }
  28 |  
  29 |     async selectToAccount(toAccount: string) {
  30 |         await this.page
  31 |             .locator("//select[@id='to-acc']")
  32 |             .selectOption({ label: toAccount });
  33 |     }
  34 |  
  35 |     async enterTransferAmount(amount: string) {
  36 |         await this.page
  37 |             .locator('#transfer-amount')
  38 |             .fill(amount);
  39 |     }
  40 |  
  41 |     async executeTransfer() {
  42 |         await this.page
  43 |             .locator('button:has-text("Execute Transfer")')
  44 |             .click();
  45 |     }
  46 | }
  47 |  
  48 |  
  49 | 
```