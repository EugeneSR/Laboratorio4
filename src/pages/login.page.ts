import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    /************Locators***************************/

    private linkLogin: string = ".login";
    private email: string = '#email';
    private password: string = '#passwd';
    private loginButton: string = '#SubmitLogin';
 

    constructor() {
        super();
    }
   
    async clickLink(){
        await ElementActions.click(this.linkLogin);
    }

    async setEmail(text:string){

        await ElementActions.setText(this.email, text);
    }
    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginButton);
        await this.driver.Page.waitForTimeout(500);
        
    }

}
