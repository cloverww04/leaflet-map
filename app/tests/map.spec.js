import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Draw a rectangle' }).click();
  await page.getByText('Click and drag to draw rectangle.+−Draw a rectangleCancelEdit layersDelete').click();
  await page.getByRole('img').locator('path').click();
  await page.getByRole('img').locator('path').click();
  await page.getByRole('img').locator('path').click();
});
