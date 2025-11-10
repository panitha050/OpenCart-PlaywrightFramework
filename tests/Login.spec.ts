import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to appUrl

    //Initialize page Objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);

})
test.afterEach(async ({ page }) => {
       await page.close();
})
test('User Login test @master,@sanity, @regression', async () => {

    //Navigate to login page via Home page
    await homePage.clickMyAccount();
    await homePage.clickLogin();


    //Enter valid credentials and login
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();
    //alternatively
    //loginPage.login(config.email,config.password);

    //Verify successfull login by checking 'My Account' page presence
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
    await myAccountPage.clickLogout();


})