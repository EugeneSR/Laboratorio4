import { BasePage } from "./base.page";
import dotenv from 'dotenv';

dotenv.config({ path: `.env.test`, override: true });

export class LoginPage extends BasePage {

    /************Locators***************************/

    private selectOptionLogin: string = ".login";
    private email: string = '#email';
    private password: string = '#passwd';
    private loginButton: string = '#SubmitLogin';

    constructor() {
        super();
    }

    async Login(email: string, password: string) {

        //--------Login----------------
        const expct = String(process.env.EMAIL);
        await this.driver.Page.click(this.selectOptionLogin);
        this.scroll();
        await this.driver.Page.waitForTimeout(200);
        await this.driver.Page.fill(this.email, email);
        await this.driver.Page.fill(this.password, password);
        await this.driver.Page.waitForTimeout(200);
        await this.driver.Page.click(this.loginButton);
        await this.driver.Page.waitForTimeout(200);

        //--------Home-------------------
        const home = String(process.env.HOME);
        await this.driver.Page.goto(home);

        this.scroll();
        //--------Inf. Personal----------------
        await this.driver.Page.waitForTimeout(300);
        await this.driver.Page.locator("//*[contains(text(),'My personal information')]").click();
        this.scroll();

        let accountInf = String(process.env.ACCOUNT_INFO);
        await this.driver.Page.goto(accountInf);

        this.scroll();
        await this.driver.Page.waitForTimeout(2000);
        let emailInf = await this.driver.Page.locator(`#email`).inputValue();

        console.log(emailInf);
        console.log(expct);

        //*------------------Expect------------------*/
        expect(expct).toEqual(emailInf);
        //*------------------End----------------------*/

    }
    
    async scroll() {
        /*********************Scroll ***********************/
        let selectLogin = this.driver.Page.locator("#block_top_menu");
        const box = await selectLogin.boundingBox();

        if (box) {
            const y = box.y;
            await this.driver.Page.mouse.wheel(0, y);
        }
        /*********************--END--***********************/
    }


}
