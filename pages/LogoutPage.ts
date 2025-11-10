import {Page,Locator} from '@playwright/test';
import {HomePage} from '../pages/HomePage';

export class LogoutPage{

    private readonly page: Page;
    private readonly btnContinue: Locator;

    //constructor
    constructor(page: Page){
        this.page=page;
        this.btnContinue=page.locator('.btn.btn-primary');
    }
    async isContinueButtonVisible(): Promise<boolean> {
       return await this.btnContinue.isVisible();
    }
    async clickContinue(): Promise<HomePage>{
        await this.btnContinue.click();
        return new HomePage(this.page);
    }

}