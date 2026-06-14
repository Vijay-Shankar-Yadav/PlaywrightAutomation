// @ts-ignore: Ignore module resolution issue for Playwright test types
import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../page/login.page';
import { InventoryPage } from '../page/inventory.page';
import { CartPage } from '../page/cart.page';

test.beforeEach(`Login with valid credentials`, async ({ page }: { page: Page }) => {
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

test('verify all items are displayed', async ({ page }: { page: Page }) => {
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
    // Add Backpack to cart
    await inventoryPage.addToCartBackpack.click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);

});
test('verify to all item are added to cart', async ({ page }: { page: Page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.username.fill('standard_user');
    await loginPage.password    .fill('secret_sauce');
    await loginPage.loginButton.click();                            
    
    const cartPage = new CartPage(page);
    // Add all items to the cart
    await cartPage.cartItems.first().click();
    await page.waitForTimeout(4000);
});
