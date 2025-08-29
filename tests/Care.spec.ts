import { test, expect } from '@playwright/test';

import {  fillById , fillByRole , clickById , clickByRole
, clickNestedByRole, hoverByRole , expectVisibleByRole, clickByTextButton
, clickNestedElement, clickSelector , fillTextByRole, selectByText, selectOptionInsideLabel
, clickBySelector , selectOptionFromComboBox, uploadFileToMultipleInputs , clickSubmitButton
  } from '../utils/helpers';

import { Login, FillHealthInsuranceForm1, CareCkyc , CareInsurer1,
   Nominee ,Product, Payment ,Justpay} from '../utils/formhelper';


  test.beforeEach(async ({ page }) => {await Login(page);});
    // test.afterEach(async ({ page }) => {await Payment(page);});

  test.setTimeout(150000);

test('1A Care Supreme', async ({ page }) => {
  await FillHealthInsuranceForm1(page);
    await fillById(page,'#mat-input-18','09121999');
      await Product(page,"₹ 7552/Yr","₹ 7407/Yr","Care");
        await CareCkyc(page);
          await CareInsurer1(page);
          // await Insurer1(page);
            // await Nominee(page); 
              // await Payment(page);
                // await Justpay(page); 
});
