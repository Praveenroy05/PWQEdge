import {test, expect} from '@playwright/test';
import path from 'path';

test("Single File Uploads", async ({page}) => {
   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

   // setInputFiles(["", ""]) is used to upload files in Playwright
   
    const path1 = path.join(__dirname, "../TestData", "excel.xlsx");
    const extension = path1.split(".")[1]
    console.log(extension); // This will log 'xlsx' if the file is excel.xlsx

    // __dirname is a Node.js global variable that gives the directory name of the current module.

   await page.locator("#filesToUpload").setInputFiles(path1)
   await expect(page.locator("#fileList li")).toContainText(extension)
  //await expect(page.locator("#fileList li")).toContainText('excel1.xlsx')


})

test("Multiple File Uploads", async ({page}) => {
   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

   // setInputFiles(["", ""]) is used to upload files in Playwright
   
    const path1 = path.join(__dirname, "../TestData", "excel.xlsx");
    const path2 = path.join(__dirname, "../TestData", "excel1.xlsx");
   

    // __dirname is a Node.js global variable that gives the directory name of the current module.

   await page.locator("#filesToUpload").setInputFiles([path1, path2])
   await expect(page.locator("#fileList li").first()).toContainText("excel.xlsx")
   await expect(page.locator("#fileList li").last()).toContainText('excel1.xlsx')

  // We have to use the setInputFiles([path1, path2]) -  to upload the multiple files. Multiple files path we have to provide inside array ["", ""]


})