import { test, expect } from '@playwright/test';

test('Add 2 Products to Cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('Juan Francisco ');
  await page.getByLabel('Total:').press('Tab');
  await page.getByLabel('Country:').fill('Ecuador');
  await page.getByLabel('Country:').press('Tab');
  await page.getByLabel('City:').fill('Quito');
  await page.getByLabel('City:').press('Tab');
  await page.getByLabel('Credit card:').fill('000000000000000');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('12');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('body')).toContainText('Thank you for your purchase!');
  await page.getByRole('button', { name: 'OK' }).click();
});