import { mainHeader } from "../src/pages/components/MainHeaderPage";
import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

import dotenv from 'dotenv';
dotenv.config({ path: `.env.test`, override: true });

jest.setTimeout(50000);

describe('Feature My Store', () => {

    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        loginPage = new LoginPage();

    });

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);
    });

    it('Login: the user is successfully logged in', async () => {

        await loginPage.clickLink();  //Select icon Login

        const email = String(process.env.EMAIL); //Parse of variables
        await loginPage.setEmail(email);

        const password = String(process.env.PASS); //Parse of variables
        await loginPage.setPassword(password);

        await loginPage.clickLogin();

        //**********************EXPECT*************************************/
        const value = await mainHeader.getElementText();//get the logged in username
        expect(value).toEqual("Maria Perez"); // Logged in user name: Maria Perez
        expect(value).not.toEqual(null);
        //**********************END *************************************/

    });


});