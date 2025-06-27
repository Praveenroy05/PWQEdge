// API - Application Programming Interface

// Frontend - JS/TS, agular, react, vue, ajax, html, css
// Backend  - Java, Python, Go, Php
// Database - SQL, MySQL, MongoDB, PostgreS

/*
GET:
Retrieves data from a specified resource. 

POST:
Sends data to the server to create a new resource. 

PUT:
Replaces an existing resource with the data provided in the request. If the resource doesn't exist, it may be created. 

PATCH:
Partially updates a resource with the data provided in the request. It allows for modifying specific fields without replacing the entire resource. 

DELETE:
Removes a specified resource. 

*/

// Request format:

// URL - https://rahulshettyacademy.com/api/ecom/auth/login - ?
// HTTP Method - POST
// Header - {key : value}
// Query Parameter - 
// Path parameter - 
// Body - String, JSON, XML, for data  - {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}



// Response format
// Status Code - 200, 201, 204, 501, 200-OK
// Header - {key : value}
// Response body - 

/*
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjYTE3MGFlMmFmZDRjMGI0Yjg3NDgiLCJ1c2VyRW1haWwiOiJ0ZXN0N2xZTUBnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzUxMDI3NjYxLCJleHAiOjE3ODI1ODUyNjF9.O3cGaYd3dcOvvjyCxRJixX9Q9xhK_TjFYgr5aV8tLww",
    "userId": "66bca170ae2afd4c0b4b8748",
    "message": "Login Successfully"
}

*/