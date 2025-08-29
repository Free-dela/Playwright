import { beforeEach } from 'node:test';
import { Username, Password,Firstname, fillById , fillByRole , clickById , clickByRole
, clickNestedByRole, hoverByRole , expectVisibleByRole, clickByTextButton
, clickNestedElement, clickSelector , fillTextByRole, selectByText, selectOptionInsideLabel
, clickBySelector , selectOptionFromComboBox, uploadFileToMultipleInputs , clickSubmitButton,
selectRadioButton } from './helpers';


 export async function Login(page){
  await page.goto('https://vizzainsurance.com/home');
  // await page.getByRole('link', { name: 'POS', exact: true }).click();
  // await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  // await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  // await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  await clickByRole(page, 'link', 'Policy Login');
  await fillByRole(page, 'textbox', 'User Name', Username);
  await fillByRole(page, 'textbox', 'Password', Password);
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  await page.waitForNavigation();
  await hoverByRole(page, 'link', 'Online Insurance', { exact: true });
  await clickByRole(page, 'link', 'Health Insurance', { exact: true });
 }
 
  export async function UATLogin(page){
  await page.goto('https://uat.vizzainsurance.com/pos');
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
}

export async function FillHealthInsuranceForm1(page) {
  await fillByRole(page, 'textbox', 'First Name', Firstname);
  await fillByRole(page, 'textbox', 'Last Name', 'Test');
  await fillByRole(page, 'textbox', 'Email ID', 'freedela0912@gmail.com');
  await fillByRole(page, 'textbox', 'Mobile Number', '8531913069');
  await clickByRole(page, 'button', 'Next');
}
export async function fillAddress(page, address1: string, address2: string, pincode: string, city: string, area: string) {
  await fillByRole(page,'textbox','Address 1',address1);
  await fillByRole(page,'textbox','Address 2',address2);
  await fillByRole(page,'textbox','Pincode',pincode);
  await page.waitForTimeout(1000);
  await page.locator('#mat-dialog-1').getByText('CityCity *').click();
  await page.getByText(city).click();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Area Area' }).locator('span').click();
  await page.getByText(area).click();
}
export async function fillProposerDetails(page, dob: string, occupation: string, city: string, area: string) {
  await page.getByLabel('Title').getByText('Title').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill(dob);
  await page.getByLabel('1PROPOSER DETAILS').getByLabel('Occupation *').getByText('Occupation').click();
  await page.getByText(occupation).click();
  await page.getByLabel('Address 1 *').fill('45A');
  await page.getByLabel('Address 2 *').fill('Guindy');
  await page.getByLabel('Pincode *').scrollIntoViewIfNeeded();
  await page.getByLabel('Pincode *').fill('600012');
  await page.waitForTimeout(1000);
  await page.getByLabel('City *').getByText('City').click();
  await page.getByText(city).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Area *').getByText('Area').click();
  await page.getByText(area).click();
}
export async function setPolicyDates(page, startDate: string) {
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('textbox', { name: 'Policy Start Date (DD/MM/YYYY)' }).fill(startDate);
  await page.getByRole('textbox', { name: 'Policy End Date (DD/MM/YYYY)' }).click();
  await page.getByRole('button', { name: 'Next' }).first().scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Next' }).first().click();
}
export async function CkycProposer(page) {
  await clickBySelector(page, '#mat-radio-19 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle');
  await fillTextByRole(page, 'PAN Number', 'gjkpm0846p');
  await fillTextByRole(page, 'DOB (DD/MM/YYYY)', '09121999');
  await clickSubmitButton(page);
  await selectOptionFromComboBox(page, 'Occupation Occupation', 'Professional');
  await selectOptionInsideLabel(page, 'Income Source', 'Salary');
  await selectByText(page, 'Residential StatusResidential', 'Resident');
  await selectOptionInsideLabel(page, 'Family Relationship', 'Father');
  await selectOptionInsideLabel(page, 'Identity Proof Document Type', 'Aadhaar Card');
  await fillTextByRole(page, 'Aadhaar Card Number', '0000');
  await selectOptionInsideLabel(page, 'Address Proof Document Type', 'Voter ID');
  await fillTextByRole(page, 'Voter ID Number', '0000');

  await uploadFileToMultipleInputs(page, 'C:/Users/freed/OneDrive/Desktop/Doc/TestDoc.jpg', 3);
  await fillAddress(page, '45A', 'Guindy', '600012', 'Chennai', 'Chennai - 12');
  await clickByTextButton(page,'Submit');
  await fillProposerDetails(page, '09121999', 'BUSINESS/TRADERS', 'Chennai', 'Chennai - 12');
  await setPolicyDates(page, '30082025');
}
export async function Nominee(page) {
  await fillByRole(page,'textbox','Name of Nominee','Nominee');
  await fillByRole(page,'textbox','Age','25');
  await selectOptionInsideLabel(page, 'Relationship with Proposer', 'Brother');
  await fillByRole(page,'textbox', '% Of the Claim','100');
  await page.waitForTimeout(2000);
  await page.locator('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
}

export async function Insurer1(page) {
  await page.locator('#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '170');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '70');
  await page.locator('#mat-radio-36 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.locator('#mat-radio-40 > .mat-radio-label > .mat-radio-container').click();
  await page.locator('#mat-radio-43 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.locator('#mat-radio-45 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await fillByRole(page,'textbox', 'illness' ,'Heart');
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).scrollIntoViewIfNeeded
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
}

export async function Insurer1C(page) {
  await page.locator('#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '170');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '70');
  await selectRadioButton(page,66);
  await selectRadioButton(page,60);
  await selectRadioButton(page,75);
  await selectRadioButton(page,78);
  await selectRadioButton(page,81);
  await page.getByRole('textbox', { name: 'illness' }).fill('Brain');
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).scrollIntoViewIfNeeded
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
}

export async function Insurer2(page) {
  await page.locator('#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '170');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '70');
  await page.getByRole('button', { name: '1. INSURED DETAILS' }).click();
  await page.getByRole('button', { name: '2. INSURED DETAILS' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Spouse');
  await page.getByRole('region', { name: 'INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByLabel('Gender', { exact: true }).getByText('Gender').click();
  await page.getByText('Female').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '160');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '60');
  await page.getByLabel('Occupation', { exact: true }).getByText('Occupation').click();
  await page.getByText('HOUSEWIVES').click();
  await page.getByLabel('2. INSURED DETAILS').getByLabel('Relationship with Proposer').getByText('Relationship with Proposer').click();
  await page.getByText('SPOUSE').click();
  // await page.locator('#mat-radio-42 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  // await page.locator('#mat-radio-46 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  // await page.locator('#mat-radio-48 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  // await page.locator('#mat-radio-52 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).scrollIntoViewIfNeeded
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
}

export async function Insurer2C(page) {
  await page.locator('#mat-checkbox-17 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '170');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '70');
  await page.getByRole('button', { name: '1. INSURED DETAILS' }).click();
  await page.getByRole('button', { name: '2. INSURED DETAILS' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Spouse');
  await page.getByRole('region', { name: 'INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByLabel('Gender', { exact: true }).getByText('Gender').click();
  await page.getByText('Female').click();
  await fillByRole(page, 'textbox', 'Height(cms)', '160');
  await fillByRole(page, 'textbox', 'Weight(kgs)', '60');
  await page.getByLabel('Occupation', { exact: true }).getByText('Occupation').click();
  await page.getByText('HOUSEWIVES').click();
  await page.getByLabel('2. INSURED DETAILS').getByLabel('Relationship with Proposer').getByText('Relationship with Proposer').click();
  await page.getByText('SPOUSE').click();
  await page.locator('#mat-radio-111 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).scrollIntoViewIfNeeded
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
}

export async function Product  (page, Premium1: string ,Premium2: string ,Product :string) {
  await fillByRole(page, 'textbox', 'PIN CODE', '600012');
  await clickByRole(page, 'button', 'Proceed');
  await clickNestedByRole(page, 'combobox', 'Filter by company All (+ 5', 'mat-select-trigger');
  await clickById(page,'.mat-checkbox-inner-container');
  await clickNestedElement(page, 'option', Product , 'mat-pseudo-checkbox');
  await clickSelector(page, '.cdk-overlay-backdrop');
  await expectVisibleByRole(page, 'button', Premium1);
  await expectVisibleByRole(page, 'button', Premium2);
  await clickByTextButton(page, Premium1);
  await clickByTextButton(page, 'Ok');
}

export async function Payment(page) {
  await page.getByRole('button', { name: 'Review Link' }).scrollIntoViewIfNeeded();
  await clickByTextButton(page, 'Review Link');
  await page.getByRole('button', { name: 'Payment Link' }).scrollIntoViewIfNeeded();
  await clickByTextButton(page, 'Payment Link');
  await page.getByRole('button', { name: 'Pay by Customer' }).scrollIntoViewIfNeeded();
  await clickByTextButton(page, 'Pay by Customer');
}

  export async function Justpay(page) {
  await page.getByRole('button', { name: 'Jus Pay' }).scrollIntoViewIfNeeded();
  await clickByTextButton(page, 'Jus Pay');
  const frame = await page.locator('section iframe').contentFrame();
  if (!frame) throw new Error('Payment iframe not found');
      await frame.getByRole('textbox', { name: 'Username@bankname' }).fill('sirajabhi4-4@okaxis');
      await frame.getByRole('button', { name: 'Verify and Pay ₹' }).click();
}

export async function CareCkyc(page){
  await page.locator('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByLabel('Identity Proof Type *').getByText('Identity Proof Type').click();
  await page.getByText('Voter ID').click();
  await page.getByLabel('Address Proof Type *').getByText('Address Proof Type').click();
  await page.getByRole('option', { name: 'Voter ID' }).locator('span').click();
  await uploadFileToMultipleInputs(page, 'C:/Users/freed/OneDrive/Desktop/Doc/TestDoc.jpg', 2);
  await page.getByRole('button', { name: 'Submit' }).click();
}

export async function CareInsurer1(page) {
  await page.locator('#mat-select-value-31').getByText('Title').click();
  await page.getByText('MR').click();
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme');
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('freedela0912@gmail.com');
  await page.getByRole('region', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913069');
  await page.locator('#mat-input-34').fill('45');
  await page.locator('#mat-input-35').fill('Teynampet');
  await page.locator('#mat-input-36').fill('600012');
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-value-23').getByText('City').click();
  await page.getByText('Chennai').click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('#cdk-accordion-child-10').getByRole('button', { name: 'Next' }).click();
}