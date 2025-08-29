import { test, expect } from '@playwright/test';

import {  fillById , fillByRole , clickById , clickByRole
, clickNestedByRole, hoverByRole , expectVisibleByRole, clickByTextButton
, clickNestedElement, clickSelector , fillTextByRole, selectByText, selectOptionInsideLabel
, clickBySelector , selectOptionFromComboBox, uploadFileToMultipleInputs , clickSubmitButton
  } from '../utils/helpers';

import { Login, FillHealthInsuranceForm1, CkycProposer , Insurer1 , Insurer1C
  , Nominee ,Product, Insurer2 , Insurer2C, Payment ,Justpay} from '../utils/formhelper';


  test.beforeEach(async ({ page }) => {await Login(page);});
    // test.afterEach(async ({ page }) => {await Payment(page);});
  test.setTimeout(150000);

test.only('1A Assure', async ({ page }) => {
  await FillHealthInsuranceForm1(page);
    await fillById(page,'#mat-input-18','09121999');
      await Product(page,"₹ 7676/Yr","₹ 8940/Yr","Star Health");
        await CkycProposer(page);
          await Insurer1(page);
            await Nominee(page); 
              // await Payment(page);
                // await Justpay(page); 
});

test('2A Assure', async ({ page }) => {
  await FillHealthInsuranceForm1(page);
    await fillById(page,'#mat-input-18','09121999');
      await fillById(page,'#mat-input-20','09121999');
        await Product(page,"₹ 12930/Yr","₹ 13280/Yr","Star Health");
          await CkycProposer(page);
            await Insurer2(page);
              await Nominee(page);
                // await Payment(page);
});

test('1A Comprehensive', async ({ page }) => {
  await FillHealthInsuranceForm1(page);
    await fillById(page,'#mat-input-18','09121999');
      await Product(page,"₹ 8940/Yr","₹ 7676/Yr","Star Health");
        await CkycProposer(page);
          await Insurer1C(page);
            await Nominee(page);  
              // await Payment(page);
                // await Justpay(page); 
});

test('2A Comprehensive', async ({ page }) => {
  await FillHealthInsuranceForm1(page);
    await fillById(page,'#mat-input-18','09121999');
      await fillById(page,'#mat-input-20','09121999');
        await Product(page,"₹ 13280/Yr","₹ 12930/Yr","Star Health");
          await CkycProposer(page);
            await Insurer2C(page);
              await Nominee(page);
                // await Payment(page);
});