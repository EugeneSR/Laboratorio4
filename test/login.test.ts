
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
        await loginPage.navigateTo();
    });

    it('Login: the user is successfully logged in', async () => {
        const email = String(process.env.EMAIL);
        const pass = String(process.env.PASS);
        await loginPage.Login(email, pass);

    });
});