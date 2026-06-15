import { test, expect } from '@playwright/test';
import { InventoryPage } from '../page/inventory.page';
import { CartPage } from '../page/cart.page';

test('verify all items are displayed', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.inventoryItems.first()).toBeVisible();

    await inventoryPage.addToCartBackpack.click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(1);
});

test('verify all items are added to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    const cartPage = new CartPage(page);

    await cartPage.cartItems.first().click();

    await page.waitForTimeout(4000);
});