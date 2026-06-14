import {test, expect} from '@playwright/test';
import users from '../testData/auth.json';
import { LoginPage } from '../page/login.page';

users.forEach(({username, password}) => {
    test(`login with username: ${username} and password: ${password}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);

        // Enter username and password
        await loginPage.username.fill(username);
        await loginPage.password.fill(password);
        await loginPage.loginButton.click();
    });
});