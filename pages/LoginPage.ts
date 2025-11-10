import {Page,Locator} from '@playwright/test';

export class LoginPage{

 private readonly page: Page;
//Locators
private readonly emailTextBoxLocator;
private readonly pwdTextBoxLocator;
private readonly loginBtnLocator;
private readonly erroMsgLocator;

//constructor
constructor(page: Page){
   this.page = page;
   this.emailTextBoxLocator= page.getByRole('textbox', { name: 'E-Mail Address' });
   this.pwdTextBoxLocator=page.getByRole('textbox', { name: 'Password' }) 
   this.loginBtnLocator=page.locator('input.btn.btn-primary')
   this.erroMsgLocator=page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true });

}
//Action Methods
async setEmail(emailId: string){
   await this.emailTextBoxLocator.fill(emailId);
}
async setPassword(password:string){
   await this.pwdTextBoxLocator.fill(password);
}
async clickLogin(){
   await this.loginBtnLocator.click();
}
async login(email: string,pwd:string){
     await this.emailTextBoxLocator.fill(email);
     await this.pwdTextBoxLocator.fill(pwd);
     await this.loginBtnLocator.click();
}

async getloginErrorMessage(){
    return (await this.erroMsgLocator.textContent());
}
}