import { Locator, Page } from "playwright";

export class ProductDetailsPage{

    productName : Locator
    page : Page
    constructor(page: Page) {
        this.page = page;
        this.productName = this.page.locator("div.col-lg-6 h2")
    }
        
}