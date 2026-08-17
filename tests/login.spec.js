import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('user can log in with valid credentials', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');

        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory/);
    });

    test('user cannot log in with invalid password', async ({ page}) => {

        await page.getByPlaceholder('Username').fill('standard_user');

        await page.getByPlaceholder('Password').fill('wrong_password');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Username and password do not match')).toBeVisible();
    });

    test('user cannot log in with invalid username', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('wrong_user');

        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Username and password do not match')).toBeVisible();
    });

    test('user cannot log in with empty credentials', async ({ page }) => {

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Username is required')).toBeVisible();
    });

    test('user cannot log in with username containing only spaces', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('   ');

        await page.getByPlaceholder('Password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login'}).click();

        await expect(page.getByText('Username and password do not match')).toBeVisible();
    });

    test('user cannot log in with password containing only spaces', async({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user');

        await page.getByPlaceholder('Password').fill('   ');

        await page.getByRole('button', { name: 'Login'}).click();

        await expect(page.getByText('Username and password do not match')).toBeVisible();
    });

    test('practice different locator strategies', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.getByRole('button', { name: 'Login'}).click();

        await expect(page).toHaveURL(/inventory/);
    });

    test('invalid login displays error', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('wrong_user');

        await page.locator('[data-test="password"]').fill('wrong_password');

        await page.locator('[data-test="login-button"]').click();

        await expect(page.getByTestId('error')).toBeVisible();
    });

});

