import { test, expect } from '@playwright/test';
import path from 'path';    

export const Username = 'testmanager@gmail.com';
export const Password = 'admin1';
export const Firstname = 'Vizza';

export async function fillByRole(page, role: string, name: string, value: string, options = {}) {
  await page.getByRole(role, { name, ...options }).fill(value);
}
export async function clickByRole(page, role: string, name: string, options = {}) {
  await page.getByRole(role, { name, ...options }).click();
}
export async function clickNestedByRole(page, role: string, name: string, nestedSelector: string, options = {}) {
  await page.getByRole(role, { name, ...options }).locator(nestedSelector).click();
}
export async function hoverByRole(page, role: string, name: string, options = {}) {
  await page.getByRole(role, { name, ...options }).hover();
}
export async function fillById(page, selector: string, value: string) {
  await page.locator(selector).fill(value);
}
export async function clickById(page, selector: string) {
  await page.locator(selector).click();
}
export async function clickNestedElement(page, role: string, name: string, nestedSelector: string, options = {}) {
  await page.getByRole(role, { name, ...options }).locator(nestedSelector).click();
}
export async function clickSelector(page, selector: string) {
  await page.locator(selector).click();
}
export async function expectVisibleByRole(page, role: string, name: string, options = {}) {
  await expect(page.getByRole(role, { name, ...options })).toBeVisible();
}
export async function clickByTextButton(page, buttonText: string) {
  await page.getByRole('button', { name: buttonText }).click();
}
export async function clickBySelector(page, selector: string) {
  await page.locator(selector).click();
}
export async function fillTextByRole(page, name: string, value: string) {
  await page.getByRole('textbox', { name }).fill(value);
}
export async function selectByText(page, labelOrDropdownText: string, optionText: string) {
  await page.getByText(labelOrDropdownText).click();
  await page.getByText(optionText, { exact: true }).click();
}
export async function selectOptionInsideLabel(page, label: string, option: string) {
  await page.getByLabel(label).getByText(label).click();
  await page.getByText(option, { exact: true }).nth(0).click();
}
export async function selectOptionFromComboBox(page, comboBoxName: string, option: string) {
  await page.getByRole('combobox', { name: comboBoxName }).locator('span').click();
  await page.getByText(option, { exact: true }).click();
}
export async function clickSubmitButton(page) {
  await page.getByRole('button', { name: 'Submit' }).click();
}
export async function selectRadioButton(page, value: number) {
  const locator = page.locator(`#mat-radio-${value} .mat-radio-label .mat-radio-container .mat-radio-outer-circle` );
  await expect(locator).toBeVisible({ timeout: 5000 });
  await locator.click();
}
export async function uploadFileToMultipleInputs(page, filePath: string, count: number) {
  const resolvedPath = path.resolve(filePath);
  for (let i = 0; i < count; i++) {
    const input = page.locator('input[type="file"]').nth(i);
    await input.setInputFiles(resolvedPath);
  }
}




