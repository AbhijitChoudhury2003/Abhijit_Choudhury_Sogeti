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
  - waiting for getByRole('combobox', { name: 'TRANSFER TYPE' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
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
  - generic [ref=e85]:
    - heading "Add New Beneficiary" [level=3] [ref=e86]
    - generic [ref=e87]: Beneficiary with this account number already exists
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]: Full Name / Nickname
        - textbox "e.g. John Doe" [ref=e91]: John Singh
      - generic [ref=e92]:
        - generic [ref=e93]: Account Number
        - textbox "e.g. 1234567890" [ref=e94]: "1234567890"
      - generic [ref=e95]:
        - generic [ref=e96]: Recipient Bank
        - combobox [ref=e97]:
          - option "Chase Bank" [selected]
          - option "Bank of America"
          - option "Wells Fargo"
          - option "Citigroup"
      - generic [ref=e98]:
        - button "Save Beneficiary" [active] [ref=e99] [cursor=pointer]
        - button "Cancel" [ref=e100] [cursor=pointer]
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
> 19 |         await this.page.getByRole('combobox', { name: 'TRANSFER TYPE' }).selectOption({ label: transferType });
     |                                                                          ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  20 |     }
  21 |  
  22 |     async selectFromAccount(fromAccount: string) {
  23 |         await this.page
  24 |             .getByRole('combobox', { name: 'FROM ACCOUNT' })
  25 |             .selectOption({ label: fromAccount });
  26 |     }
  27 |  
  28 |     async selectToAccount(toAccount: string) {
  29 |         await this.page
  30 |             .getByRole('combobox', { name: 'TO ACCOUNT' })
  31 |             .selectOption({ label: toAccount });
  32 |     }
  33 |  
  34 |     async enterTransferAmount(amount: string) {
  35 |         await this.page
  36 |             .getByRole('textbox', { name: 'TRANSFER AMOUNT ($)' })
  37 |             .fill(amount);
  38 |     }
  39 |  
  40 |     async executeTransfer() {
  41 |         await this.page
  42 |             .getByRole('button', { name: 'Execute Transfer' })
  43 |             .click();
  44 |     }
  45 | }
  46 |  
  47 |  
  48 | 
```