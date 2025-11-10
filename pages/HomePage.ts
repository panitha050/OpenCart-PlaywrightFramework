import { Page, Locator } from '@playwright/test';

export class HomePage {

    private readonly page: Page;
    //Locators
    private readonly lnkMyAccountLocator: Locator;
    private readonly lnkRegisterLocator: Locator;
    private readonly lnkLoginLocator: Locator;
    private readonly searchBoxLocator: Locator;
    private readonly searchBtnLocator: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccountLocator = page.locator('span:has-text("My Account")');
        this.lnkRegisterLocator = page.getByText('Register');
        this.lnkLoginLocator = page.getByText('Login');
        this.searchBoxLocator = page.getByRole('textbox', { name: 'Search' });
        this.searchBtnLocator = page.locator('button.btn.btn-default.btn-lg');

    }
    //action methods
    //check if the homepage exists
    async isHomePageExists() {
        if (await this.page.title()) {
            return true;
        } return false;
    }
    
    //click My Account Link
    async clickMyAccount() {
        try {
            await this.lnkMyAccountLocator.click();
        } catch (error) {
            console.log(`Execption occured while clicking on the 'My Account': ${error}`);
            throw error;
        }
    }
    //click Register link
    async clickRegister() {
        try {
            await this.lnkRegisterLocator.click();
        } catch (error) {
            console.log(`Execption occured while clicking on the 'My Account': ${error}`);
            throw error;
        }
    }
    //click on Login button
    async clickLogin() {
        try {
            await this.lnkLoginLocator.click();

        } catch (error) {
            console.log(`Execption occured while clicking on the 'Login': ${error}`);
            throw error;
        }
    }
    //Enter Product Name in the search box
    async enterProductName(productName: string) {
        try {
            await this.searchBoxLocator.fill(productName);

        } catch (error) {
            console.log(`Execption occured while clicking on the 'Login': ${error}`);
            throw error;
        }
    }
    //click on search button
    async clickSearch() {
        try {
            await this.searchBtnLocator.click();

        } catch (error) {
            console.log(`Execption occured while clicking on the 'Login': ${error}`);
            throw error;
        }
    }
    


}