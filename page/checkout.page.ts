import {Locator, Page} from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    //readonly checkout: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        //this.checkout = page.locator('#checkout');
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code ');
        this.continueButton = page.locator('#continue');
        this.finishbutton = page.locator('#finish');
    }
}