import {test, expect} from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { InventoryPage } from '../page/inventory.page';

test.beforeEach(`Login with valid credentials`, async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);

    // Enter valid username and password
    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();

    // Verify that the user is redirected to the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('verify all items are displayed', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();

    const inventoryPage = new InventoryPage(page);

    // Verify that all inventory items are displayed
    //await expect(inventoryPage.inventoryItems).toHaveCount(6);
    await expect(inventoryPage.inventoryItems.first()).toBeVisible();
    await inventoryPage.inventoryItems.nth(1).click();
});