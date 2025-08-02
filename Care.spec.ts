import { test, expect } from '@playwright/test';
import path from 'path';    
import { Page } from '@playwright/test';

test.beforeEach('Login', async ({ page, isMobile }) => {
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('link', { name: 'Policy Login' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).type('6382228561');
  await page.getByRole('textbox', { name: 'Password' }).type('Sakthi@1602');
   await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(3000);
});

export const Acceptaccess = async (page: Page) => {
  if (await page.getByRole('button', { name: 'Ok' }).isVisible()) {
    await page.getByRole('button', { name: 'Ok' }).click();} 
    else {await page.getByRole('button', { name: '₹ 13280/Yr' }).click();}
};

export const DocumentUploadHelper = {
  async uploadIdentityAndAddressProof(page: Page, isMobile: boolean) {
    await page.getByText('Other', { exact: true }).click();
    await page.getByLabel('Identity Proof Type').getByText('Identity Proof Type').click();
    await page.getByText('PAN', { exact: true }).click();
    await page.getByText('Address Proof TypeAddress').click();
    await page.waitForTimeout(1000);
    await page.getByText('Voter ID').click();

    const uploadFile = path.resolve('C:/Users/freed/OneDrive/Desktop/Doc/TestDoc.jpg');
    for (let i = 0; i < 2; i++) {
      const fileInput = await page.locator('input[type="file"]').nth(i);
      await fileInput.setInputFiles(uploadFile);
    }
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
  },
};

test.describe.parallel('Payment Flow Care', () => {
  test.setTimeout(60000);
  test.afterEach(async ({ page, isMobile }) => {
    const copyLinkButton = page.getByRole('button', { name: 'Copy Link' });
    if (isMobile) await copyLinkButton.scrollIntoViewIfNeeded();
    await copyLinkButton.click();

    const payButton = page.getByRole('button', { name: 'Pay by Customer' });
    if (isMobile) await payButton.scrollIntoViewIfNeeded();
    await payButton.click();
  });

  test('Care Supreme Floater', async ({ page: page4, isMobile }) => {
    await page4.waitForTimeout(2000);
    await page4.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page4.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page4.waitForTimeout(3000);
    await page4.getByRole('textbox', { name: 'First Name' }).type('Care');
    await page4.getByRole('textbox', { name: 'Last Name' }).type('Supreme'); 
    await page4.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
    await page4.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page4.getByRole('button', { name: 'Next' }).click();
    await page4.waitForTimeout(2000);
    await page4.locator('#mat-input-19').fill('25');
    await page4.locator('#mat-input-21').fill('25');
    await page4.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
    await page4.getByRole('button', { name: 'Proceed' }).click();
    await page4.getByRole('button', { name: '₹ 9838/Yr' }).click();
    await Acceptaccess(page4);

    await page4.waitForTimeout(2000);
    await DocumentUploadHelper.uploadIdentityAndAddressProof(page4, isMobile);
    await page4.locator('#mat-select-value-31').getByText('Title').click();
    await page4.getByText('MR', { exact: true }).click();
    await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').type('Care');
    await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('SupremeFloater');
    await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('08062002');
    await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
    await page4.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
    await page4.locator('#mat-input-34').fill('34');
    await page4.locator('#mat-input-35').fill('anna nagar ');
    await page4.locator('#mat-input-36').fill('627005');
    await page4.waitForTimeout(1000);
    await page4.locator('#mat-select-value-23').getByText('City').click();
    await page4.waitForTimeout(2000);
    await page4.getByText('Palayamkottai').click();
    await page4.locator('.mat-checkbox-inner-container').first().click();
    await page4.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
    await page4.getByRole('strong').click();
    await page4.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
    await page4.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
    await page4.getByRole('button', { name: 'SPOUSE DETAILS' }).click();

    await page4.locator('#mat-select-value-39').getByText('Title').click();
    await page4.getByText('MS', { exact: true }).click();
    await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('test');
    await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('w');
    await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('08062001');
    await page4.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page4.getByText('SPOUSE', { exact: true }).click();
    await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
    await page4.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
    await page4.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
    await page4.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');

    await page4.locator('#cdk-accordion-child-17').getByRole('button', { name: 'Next' }).click();
    await page4.locator('#cdk-accordion-child-11').getByRole('button', { name: 'Next' }).click();

  await page4.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page4.getByRole('option', { name: 'MR' }).locator('span').click();
  await page4.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('First Name *').fill('Test');
  await page4.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('Last Name *').fill('Care');
  await page4.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page4.getByText('Relationship with InsuredRelationship with Insured *').click();
  await page4.getByText('BROTHER').click();
  await page4.getByRole('textbox', { name: 'Bank Account No' }).fill('000000000000000');
  await page4.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002372');
  await page4.locator('#cdk-accordion-child-12').getByRole('button', { name: 'Next' }).click();
 
  });

  test('Care Supreme Floater 2A + 2C', async ({ page: page5, isMobile }) => {
    await page5.waitForTimeout(2000);
    await page5.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page5.waitForTimeout(1000);
    await page5.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page5.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page5.waitForTimeout(3000);
    await page5.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
    await page5.getByRole('textbox', { name: 'First Name' }).type('Care');
    await page5.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
    await page5.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page5.getByRole('button', { name: 'Next' }).click();
    await page5.locator('#mat-input-19').fill('40');
    await page5.locator('#mat-input-21').fill('40');
    await page5.locator('#mat-input-23').fill('15');
    await page5.locator('#mat-input-25').fill('10');
    await page5.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
    await page5.getByRole('button', { name: 'Proceed' }).click();
    await page5.waitForTimeout(2000);
    await page5.getByRole('button', { name: '₹ 16235/Yr' }).click();
    await Acceptaccess(page5);

    await page5.waitForTimeout(2000);
    await DocumentUploadHelper.uploadIdentityAndAddressProof(page5, isMobile);
    await page5.locator('#mat-select-value-31').getByText('Title').click();
    await page5.getByText('MR', { exact: true }).click();
    await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
    await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme FF');
    await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('Care@gmail.com');
    await page5.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
    await page5.locator('#mat-input-34').fill('3');
    await page5.locator('#mat-input-35').fill('4');
    await page5.locator('#mat-input-36').fill('600010');
    await page5.waitForTimeout(1000);
    await page5.locator('#mat-select-value-23').getByText('City').click();
    await page5.waitForTimeout(2000);
    await page5.getByText('Chennai').click();
    const checkbox = page5.locator('.mat-checkbox-inner-container').first();
    await checkbox.click();
    await page5.waitForTimeout(2000);
    await page5.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
    await page5.getByRole('strong').click();
    await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
    await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
    // SPOUSE
    await page5.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
    await page5.locator('#cdk-accordion-child-17').getByText('TitleTitle *').click();
    await page5.getByText('MS', { exact: true }).click();
    await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('Care');
    await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('Spouse');
    await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
    await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page5.getByText('SPOUSE', { exact: true }).click();
    await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
    await page5.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
    await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
    await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
    // SON
    await page5.getByRole('button', { name: 'SON DETAILS' }).click();
    await page5.locator('#mat-select-value-45').getByText('Title').click();
    await page5.getByRole('option', { name: 'MR' }).locator('span').click();
    await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('First Name *').fill('Care');
    await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('Last Name *').fill('Son');
    await page5.getByRole('region', { name: 'SON DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122010');
    await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page5.getByText('SON', { exact: true }).click();
    await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
    await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
    // DAUGHTER
    await page5.getByRole('button', { name: 'DAUGHTER DETAILS' }).click();
    await page5.locator('#cdk-accordion-child-19').getByText('TitleTitle *').click();
    await page5.getByRole('option', { name: 'MS' }).locator('span').click();
    await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('First Name *').fill('Care');
    await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('Last Name *').fill('Daughter');
    await page5.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122015');
    await page5.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page5.getByText('DAUGHTER', { exact: true }).click();
    await page5.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
    await page5.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');

  await page5.locator('#cdk-accordion-child-19').getByRole('button', { name: 'Next' }).click();
  await page5.locator('#cdk-accordion-child-11').getByRole('button', { name: 'Next' }).click();

  await page5.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page5.getByRole('option', { name: 'MR' }).locator('span').click();
  await page5.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('First Name *').fill('Test');
  await page5.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('Last Name *').fill('Care');
  await page5.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page5.getByText('Relationship with InsuredRelationship with Insured *').click();
  await page5.getByText('BROTHER').click();
  await page5.getByRole('textbox', { name: 'Bank Account No' }).fill('000000000000000');
  await page5.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002372');
  await page5.locator('#cdk-accordion-child-12').getByRole('button', { name: 'Next' }).click();
  });

  test('Care Supreme ', async ({ page: page6, isMobile }) => {
    await page6.waitForTimeout(2000); 
    await page6.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page6.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page6.waitForTimeout(3000);
    await page6.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
    await page6.getByRole('textbox', { name: 'First Name' }).type('Care');
    await page6.getByRole('textbox', { name: 'Last Name' }).type('Supreme');
    await page6.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page6.getByRole('button', { name: 'Next' }).click();
    await page6.locator('#mat-input-19').fill('40');
    await page6.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
    await page6.getByRole('button', { name: 'Proceed' }).click();
    await page6.waitForTimeout(2000);
    await page6.getByRole('button', { name: '₹ 8979/Yr' }).click();
    await Acceptaccess(page6);

    await page6.waitForTimeout(2000);
    await DocumentUploadHelper.uploadIdentityAndAddressProof(page6, isMobile);
    await page6.locator('#mat-select-value-31').getByText('Title').click();
    await page6.getByText('MR', { exact: true }).click();
    await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Care');
    await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('Supreme');
    await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('Care@gmail.com');
    await page6.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
    await page6.locator('#mat-input-34').fill('3');
    await page6.locator('#mat-input-35').fill('4');
    await page6.locator('#mat-input-36').fill('600010');
    await page6.waitForTimeout(1000);
    await page6.locator('#mat-select-value-23').getByText('City').click();
    await page6.waitForTimeout(2000);
    await page6.getByText('Chennai').click();
    const checkbox = page6.locator('.mat-checkbox-inner-container').first();
    await page6.locator('.mat-checkbox-inner-container').first().click();
    await page6.waitForTimeout(2000);
    await page6.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
    await page6.getByRole('strong').click();
    await page6.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
    await page6.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');  

    await page6.locator('#cdk-accordion-child-16').getByRole('button', { name: 'Next' }).click();
    await page6.locator('#cdk-accordion-child-11').getByRole('button', { name: 'Next' }).click();

  await page6.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page6.getByRole('option', { name: 'MR' }).locator('span').click();
  await page6.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('First Name *').fill('Test');
  await page6.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('Last Name *').fill('Care');
  await page6.getByRole('region', { name: 'NOMINEE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page6.getByText('Relationship with InsuredRelationship with Insured *').click();
  await page6.getByText('BROTHER').click();
  await page6.getByRole('textbox', { name: 'Bank Account No' }).fill('000000000000000');
  await page6.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002372');
  await page6.locator('#cdk-accordion-child-12').getByRole('button', { name: 'Next' }).click();
  });
});