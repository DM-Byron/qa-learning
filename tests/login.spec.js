import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

const loginTestData = [
    {
        id: 'LOGIN-DATA-001',
        username: 'standard_user',
        password: 'secret_sauce',
        expectedSuccess: true
    },
    {
        id: 'LOGIN-DATA-002',
        username: 'standard_user',
        password: 'wrong_password',
        expectedSuccess: false 
    },
    {
        id: 'LOGIN-DATA-003',
        username: 'wrong_user',
        password: 'secret_sauce',
        expectedSuccess: false
    }
];

test.describe('Login Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        loginPage = new LoginPage(page);
    });

    test('user can log in with valid credentials @smoke', async ({ page }) => {

        await loginPage.login('standard_user', 'secret_sauce');

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

    test('successful login displays Products page', async ({ page }) => {
        await page.getByTestId('username').fill('standard_user');
        await page.getByTestId('password').fill('secret_sauce');
        await page.getByTestId('login-button').click();

        await expect(page).toHaveURL(/inventory/);

        await expect(page.getByText('Products', { exact: true })).toBeVisible();
    });

    for (const testData of loginTestData) {
        test(`${testData.id} - Login test`, async ({ page }) => {
            await page.getByTestId('username').fill(testData.username);
            await page.getByTestId('password').fill(testData.password);
            await page.getByTestId('login-button').click();

            if (testData.expectedSuccess) {
                await expect(page).toHaveURL(/inventory/);
            } else {
                await expect(page.getByTestId('error')).toBeVisible();
            }
        });
    }

});

