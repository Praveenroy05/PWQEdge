// POM  - Page Object Model

// Page Object Model is a design pattern used in the software testing to represent a webpage as one object. It is a way to organise and manage the interaction with a web page by creating classes which encapsulate properties(variables) and behaviour(methods) of that particular page.

// Each page Object class typically contains methods for interactions with the elements typing, clicking on an element, getting the text etc.

// validLogin(){
    // fill the username
    // fill the password - changes have been introduced
    // click on the login button
// }

// POM from scratch

// Layers
// 1. Page Layer
// 2. Test Layer
// 3. Test Data Layer
// 4. Utilities layer
// 5. Reporting layer


// 1. Page Layer - Will be creating a package/folder (pages) - Locators and methods related to specific page. Ex: - LoginPage.ts, DashboardPages.ts .....
// username, password, loginBtn, viewBtn, addToCart, products
// validLogin(), invalidLogin(), validateForgotPassword(), registration().....
// viewProductDetails(), searchAndAddProductToCart().......


// 2. Test Layer - (tests - folder) - Pure test cases(Methods we have to call from Page layer) and assertions
// LoginPageTest.spec.ts, DashboardPagesTest.spec.ts, ........

// 3. Test Data  - Store the data related to the test cases - JSON/Excel/Constant/.env

// 4. Utils - Getting the data from excel, screeshot(), scrollDown(), APIUtils()

// 5. Report - html/allure


