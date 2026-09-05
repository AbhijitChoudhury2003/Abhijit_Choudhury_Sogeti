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
Error: locator.selectOption: Test timeout of 30000ms exceeded.
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
    48 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e5]:
    - generic [ref=e6]: APEX BANK
    - generic [ref=e10]:
      - generic [ref=e11]: Secure NetBanking
      - button "Reset Database" [ref=e15] [cursor=pointer]
      - img "Profile" [ref=e21]
      - button "Sign Out" [ref=e22] [cursor=pointer]
  - navigation [ref=e23]:
    - button "Accounts Summary" [ref=e24] [cursor=pointer]
    - button "Funds Transfer" [ref=e25] [cursor=pointer]
    - button "Cards Controls" [ref=e26] [cursor=pointer]
    - button "Loans Center" [ref=e27] [cursor=pointer]
    - button "Customer Support" [ref=e28] [cursor=pointer]
    - button "Preferences" [ref=e29] [cursor=pointer]
  - generic [ref=e30]:
    - generic [ref=e31]:
      - img "Profile" [ref=e32]
      - generic [ref=e33]:
        - heading "Welcome back, Apex User" [level=1] [ref=e34]
        - paragraph [ref=e35]: "Apex Trust Retail Banking Portal. Last active: Today"
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Initiate Transfer" [level=2] [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - generic [ref=e41]: Transfer Type
            - combobox [ref=e42]:
              - option "Between My Accounts" [selected]
              - option "External Wire Transfer"
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: From Account
              - combobox [ref=e46]:
                - option "Checking ($4250)" [selected]
                - option "Savings ($18400)"
            - generic [ref=e47]:
              - generic [ref=e48]: To Account
              - combobox [ref=e49]:
                - option "Checking ($4250)"
                - option "Savings ($18400)" [selected]
          - generic [ref=e50]:
            - generic [ref=e51]: Transfer Amount ($)
            - spinbutton "0.00" [ref=e52]
          - button "Execute Transfer" [ref=e53] [cursor=pointer]
      - generic [ref=e54]:
        - generic [ref=e55]:
          - heading "Registered Beneficiaries" [level=2] [ref=e56]
          - button "Add New" [ref=e57] [cursor=pointer]
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - heading "Alice Smith" [level=4] [ref=e62]
              - paragraph [ref=e63]: "Chase Bank | Acc: 1234******"
            - generic [ref=e64]:
              - button [ref=e65] [cursor=pointer]
              - button [ref=e68] [cursor=pointer]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - heading "Bob Jones" [level=4] [ref=e74]
              - paragraph [ref=e75]: "Bank of America | Acc: 5544******"
            - generic [ref=e76]:
              - button [ref=e77] [cursor=pointer]
              - button [ref=e80] [cursor=pointer]
          - generic [ref=e84]:
            - generic [ref=e85]:
              - heading "Johnffingh" [level=4] [ref=e86]
              - paragraph [ref=e87]: "Chase Bank | Acc: 1236******"
            - generic [ref=e88]:
              - button [ref=e89] [cursor=pointer]
              - button [ref=e92] [cursor=pointer]
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
     |              ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
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