import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryItems: Locator;
    readonly addToCartBackpack: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('[data-test="inventory-item-description"]');
        this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
}
