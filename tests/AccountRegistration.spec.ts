import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let regiPage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl); //Navigate to appUrl
    homePage = new HomePage(page);
    regiPage = new RegistrationPage(page);
})
test.afterEach(async ({ page }) => {
        await page.close();
})
test('User Registration Test @master, @regression', async () => {
    //Go to My Account and click on Register Link    
    homePage.clickMyAccount();
    homePage.clickRegister();

    //Fill all the registration details with random data    
    await regiPage.setFirstName(RandomDataUtil.getFirstName());
    await regiPage.setLastName(RandomDataUtil.getLastName());
    await regiPage.setEmail(RandomDataUtil.getEmail());
    await regiPage.setTelephoneNumber(RandomDataUtil.getPhoneNumber());
    const pwd = RandomDataUtil.getPassword();
    await regiPage.setPassword(pwd);
    await regiPage.setConfirmPassword(pwd);
    await regiPage.checkPrivacyCheckBox();
    await regiPage.clickContinueButton();

    //Verifying confirmation text message
    const confirmationmsg = await regiPage.getconfirmationMsg();
    expect(confirmationmsg).toContain('Your Account Has Been Created!');

})

