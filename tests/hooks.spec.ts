// Hooks
// test.beforeAll()   - It will run once before execution of all the test cases
// test.beforeEach()  - It wil run once before running each and every test cases
// test.afterEach()   - It wil run once after running each and every test cases
// test.afterAll()    - It will run once after execution of all the test cases
import {test, expect} from '@playwright/test';


test.beforeAll("before ALL", async ()=>{
    console.log("Before All");
})

test.afterAll("After ALL", async ()=>{
    console.log("After All");
})

test.beforeEach("before Each", async ()=>{
    console.log("Before Each");
})

test.afterEach("after Each", async ()=>{
    console.log("After Each");
})


test("Test1", async ()=>{
    console.log("Test1");
})

test("Test2", async ()=>{
    console.log("Test2");
})

test("Test3", async ()=>{
    console.log("Test3");
})
