import { test, expect } from '@playwright/test';

import {  fillById , fillByRole , clickById , clickByRole
, clickNestedByRole, hoverByRole , expectVisibleByRole, clickByTextButton
, clickNestedElement, clickSelector , fillTextByRole, selectByText, selectOptionInsideLabel
, clickBySelector , selectOptionFromComboBox, uploadFileToMultipleInputs , clickSubmitButton
  } from '../utils/helpers';

import { Login, FillHealthInsuranceForm1, CkycProposer , Insurer1 , Insurer1C
  , Nominee ,Product, Insurer2 , Insurer2C, Payment ,Justpay, UATLogin} from '../utils/formhelper';

// test.only('UAT', async ({ page }) => {
//     await UATLogin(page);
//     await page.pause();
                // await Payment(page);
                    // await Justpay(page);
// });