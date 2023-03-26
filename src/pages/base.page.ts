
import { Driver, driverInstance } from "../core/driver"
import dotenv from 'dotenv';
dotenv.config({path: `.env.test`, override:true});

export abstract class BasePage {
    protected driver: Driver;

    constructor(){
        this.driver = driverInstance;
    }

    async navigateTo() {
        const url=String(process.env.URL);
         await this.driver.Page.goto(url, { waitUntil: 'networkidle' });
    }



}