import {test, expect, request} from '@playwright/test'


const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}



test("Post API Call", async ()=>{
   // const response = await request.post(url, {data: loginPayload})

   const apiContext = await request.newContext()
    
   const response = await apiContext.post(url, {
        data: loginPayload
    })

    await expect(response.status()).toBe(200)

   // console.log(await response.json());

   const jsonResponse = await response.json()

   await expect(jsonResponse.userId).toBe("66bca170ae2afd4c0b4b8748")
   await expect(jsonResponse.message).toContain("Login Successfully")

})