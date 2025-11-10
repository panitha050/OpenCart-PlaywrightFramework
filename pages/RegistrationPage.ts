import { Page, Locator } from '@playwright/test';

export class RegistrationPage {

    private readonly page: Page;
    //Locators
    private readonly firstNameLocator;
    private readonly lastNameLocator;
    private readonly eMailLocator;
    private readonly telePhoneLocator;
    private readonly passwordLocator;
    private readonly confirmPasswordLocator;
    private readonly privacyPolicyLocator;
    private readonly continueBtnLocator;
    private readonly msgConfirmationLocator;

    //constructor
    constructor(page: Page) {

        this.page = page;
        //Initialize Locators
        this.firstNameLocator = page.getByLabel('First Name');
        this.lastNameLocator = page.getByLabel('Last Name');
        this.eMailLocator= page.getByLabel('E-Mail');
        this.telePhoneLocator= page.getByLabel('Telephone');
        this.passwordLocator= page.locator("#input-password");
        this.confirmPasswordLocator= page.locator("#input-confirm");
        this.privacyPolicyLocator=page.locator('input[name="agree"]');
        this.continueBtnLocator=page.locator('input[type="submit"]');
        this.msgConfirmationLocator = page.locator('h1:has-text("Your Account Has Been Created!")');
    }
    //Action Methods
    async setFirstName(fName:string):Promise<void> {
        await this.firstNameLocator.fill(fName);
    }
     async setLastName(lName:string): Promise<void>{
        await this.lastNameLocator.fill(lName);
    }
     async setEmail(email:string): Promise<void>{
        await this.eMailLocator.fill(email);
    }
     async setTelephoneNumber(telephone:string) :Promise<void>{
        await this.telePhoneLocator.fill(telephone);
    }
     async setPassword(password:string) :Promise<void>{
        await this.passwordLocator.fill(password);
    }
     async setConfirmPassword(confirmpwdd:string) :Promise<void>{
        await this.confirmPasswordLocator.fill(confirmpwdd);
    }
     async checkPrivacyCheckBox(): Promise<void>{
        await this.privacyPolicyLocator.click();
    }
    async clickContinueButton(): Promise<void>{
        await this.continueBtnLocator.click();
    }
    async getconfirmationMsg():Promise<string>{
       return await this.msgConfirmationLocator.textContent() ?? '';
    }
    async completeRegistration(userData: {
        fName:string,
        lName:string,
        email:string,
        telephone: string,
        password:string,
        confirmpwd:string
    }):Promise<void>{
        await this.firstNameLocator.fill(userData.fName);
         await this.lastNameLocator.fill(userData.lName);
         await this.eMailLocator.fill(userData.email);
         await this.telePhoneLocator.fill(userData.telephone);
         await this.passwordLocator.fill(userData.password);
         await this.confirmPasswordLocator.fill(userData.confirmpwd);
         await this.privacyPolicyLocator.click();
         await this.continueBtnLocator.click();
    }
}