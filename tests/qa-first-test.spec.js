import { test, expect } from '@playwright/test';

test('verify Playwright homepage title', async({ page}) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});

test('verify Get Started navigation', async ({page}) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('verify Installation heading', async ({ page}) => {
    await page.goto('https://playwright.dev/docs/intro');

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    
});