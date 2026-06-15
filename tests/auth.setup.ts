import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page';

setup('authenticate', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);

    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();

    await page.context().storageState({
        path: 'playwright/.auth/user.json',
    });
});