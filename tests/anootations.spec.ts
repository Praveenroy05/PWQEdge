// Annotations

/*

test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.



*/

import {test} from '@playwright/test'


test.skip("skip", async ()=>{
    console.log("Skip");
})

test.fail("fail", async ()=>{
    console.log("Fail");
})

test.fixme("fixme", async ()=>{
    console.log("Fixme");
})

test("only", async ()=>{
    console.log("Only");
})

test("slow", async ()=>{
    test.slow()
    console.log("Slow"); // Ex: - timeout of 120 seconds for this TC it will become 360 seconds
})
