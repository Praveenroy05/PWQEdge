import { Locator, Page } from "playwright";

class DashboarPage{

    private products : Locator
    private page :Page
    addToCartSuccessMsg : Locator
    homePageIdentifier : Locator

    constructor(page: Page) {
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
    }


    async searchAndAddProductToCart(productName){
        await this.products.last().waitFor({state: 'visible'})
        const countOfProduct = await this.products.count()
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("b").textContent() 
            if(productText === productName){
                await this.products.nth(i).getByText("Add To Cart").click()
                break
            }
        }
    }

    

    




}