import {Page,Locator} from '@playwright/test';
import{ LogoutPage } from '../pages/LogoutPage';

export class MyAccountPage{

    private readonly page: Page;
    //Locators
    private readonly msgHeading: Locator;
    private readonly logoutBtn: Locator;
    
    //Constructor
    constructor(page: Page){
        this.page=page;
        this.msgHeading=page.locator('h2:has-text("My Account")');
        this.logoutBtn=page.locator("//a[@class='list-group-item'][normalize-space()='Logout']");
    }

    async isMyAccountPageExists(): Promise<boolean>{
        try{
        return await this.msgHeading.isVisible();        
        }catch(error){
            console.log(`Error checking my Account page: ${error}`);
            return false;
        };        
    }
    async clickLogout(){
        try{
            await this.logoutBtn.click();
            return new LogoutPage(this.page);
        }catch(error){
            console.log(`Unable to click logout link: ${error}`);
            throw error;
        }
    }
}