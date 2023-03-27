import { Browser, BrowserContext, chromium, Page } from "playwright";

export class Driver {
    private page!: Page;
    private browser !: Browser;
    private context !: BrowserContext;

    constructor() { }

    async startDriver() {
        this.browser = await chromium.launch(
            {
                headless: false
            }
        );
        this.context = await this.browser.newContext(
            { viewport: { width: 1150, height: 570 } }
        );
        this.page = await this.context.newPage();
    }

    async closeDriver() {
        await this.context.close();
        await this.browser.close();
    }

    get Page(): Page {
        return this.page;
    }

}

export const driverInstance = new Driver();