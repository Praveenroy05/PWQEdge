// class - ES6 - ECMA SCRIPT 6 - 2015

// Syntax: - 

/*

// export - import

export class ClassName{

// properties

private var1 : Locators // Not accessible to the outside of the class
var2 : Locartor

static var3 // This belongs to the class  - ClassName.var3, ClassName.method()

constructor(key1, key2){
     this.var1 = key1     // className.var1 = param1
     this.var2 = key2    // className.var2 = param2
}


 info(arg1, arg2): return datatype{
 // 
}

static info1(){...}

}


// Syntax for Object creation

let className = new ClassName(param1, param2)
className.var1
className.info(var1, var2)

ClassName.var3
ClassName.info1()


let className1 = new ClassName(par1, par2)


*/



export class LoginPage{

    private username 
    private password
    private loginBtn
    homePageIdentifier
    static pageCount = 2


    constructor(){
        this.username = "username"
        this.password = "password"
        this.loginBtn = "loginBtn"
        this.homePageIdentifier = "value"
    }


    validLogin(){
        console.log(this.username)
        console.log(this.password)
        console.log(this.loginBtn)
    }

    static invalidLogin(){
        console.log(LoginPage.pageCount)
      
    }

}

let loginPage = new LoginPage()
 console.log(loginPage.homePageIdentifier)
 loginPage.validLogin()
 LoginPage.invalidLogin()