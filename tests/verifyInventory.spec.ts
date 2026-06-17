import { test, expect } from '@playwright/test';
import { InventoryPage } from '../page/inventory.page';
import { CartPage } from '../page/cart.page';
import { CheckoutPage } from '../page/checkout.page';

test('verify all items are displayed', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.inventoryItems.first()).toBeVisible();

    await inventoryPage.addToCartBackpack.click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(1);


//test('verify all items are added to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    const cartPage = new CartPage(page);

    await cartPage.cartItems.first().click();

    await page.waitForTimeout(4000);

//test('verify checkout process', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/checkout-step-one.html');

    await checkoutPage.firstNameInput.fill('John');
    await checkoutPage.lastNameInput.fill('Doe');
    await checkoutPage.postalCodeInput.fill('12345');

    await checkoutPage.continueButton.click();
    await page.waitForTimeout(4000);
    const actualProductName = await page.locator('.inventory_item_name').textContent();
    expect(actualProductName).toBe('Sauce Labs Backpack');
    await checkoutPage.finishbutton.click();
    await page.waitForTimeout(4000);
    const message = await page.locator('.complete-header').innerText();
   console.log("Order Confirmation:", message);
});
