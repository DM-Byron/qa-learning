import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

test('user can login and logout @smoke', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

    await productsPage.logout();

    await expect(page).toHaveURL(/\/$/);

    await expect(page.getByTestId('login-button')).toBeVisible();
});