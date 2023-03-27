
import { BasePage } from "../base.page";

class MainHeaderPage extends BasePage {
    // Locators    
    private iconName = `//a[@class="account"]//ancestor::span`;

    constructor() {
        super();
    }

    async getElementText() {

        return this.driver.Page.textContent(this.iconName);
    }
}

export const mainHeader = new MainHeaderPage();