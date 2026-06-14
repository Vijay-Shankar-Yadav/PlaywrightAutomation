import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(private readonly page: Page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
}