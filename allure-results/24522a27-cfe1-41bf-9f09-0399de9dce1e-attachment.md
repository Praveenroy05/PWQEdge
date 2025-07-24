# Test info

- Name: Print all table values and check all checkboxes across pages
- Location: C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\paginationWebTable.spec.ts:3:5

# Error details

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table#productTable tbody tr').nth(1).locator('td').nth(3).locator('input[type="checkbox"]')
    - locator resolved to <input type="checkbox"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at C:\Users\prave\OneDrive\Documents\Praveen-PW\QEdgePWMay\tests\paginationWebTable.spec.ts:38:22
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox "Start Date"
- text: to
- textbox "End Date"
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - cell "BookName"
      - cell "Author"
      - cell "Subject"
      - cell "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name CPU (%) Disk (MB/s) Network (Mbps) Memory (MB)":
      - cell "Name"
      - cell "CPU (%)"
      - cell "Disk (MB/s)"
      - cell "Network (Mbps)"
      - cell "Memory (MB)"
  - rowgroup:
    - row "Chrome 5.6% 0.17 MB/s 0.3 Mbps 45.7 MB":
      - cell "Chrome"
      - cell "5.6%"
      - cell "0.17 MB/s"
      - cell "0.3 Mbps"
      - cell "45.7 MB"
    - row "System 6.2% 0.76 MB/s 9.1 Mbps 93.3 MB":
      - cell "System"
      - cell "6.2%"
      - cell "0.76 MB/s"
      - cell "9.1 Mbps"
      - cell "93.3 MB"
    - row "Firefox 3.9% 0.62 MB/s 0.3 Mbps 36.3 MB":
      - cell "Firefox"
      - cell "3.9%"
      - cell "0.62 MB/s"
      - cell "0.3 Mbps"
      - cell "36.3 MB"
    - row "Internet Explorer 5.1% 0.86 MB/s 7.9 Mbps 51.2 MB":
      - cell "Internet Explorer"
      - cell "5.1%"
      - cell "0.86 MB/s"
      - cell "7.9 Mbps"
      - cell "51.2 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 5.6%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 36.3 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 0.3 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.62 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - cell "ID"
      - cell "Name"
      - cell "Price"
      - cell "Select"
  - rowgroup:
    - row "6 Bluetooth Speaker $9.99":
      - cell "6"
      - cell "Bluetooth Speaker"
      - cell "$9.99"
      - cell:
        - checkbox [checked]
    - row "7 Television $20.99":
      - cell "7"
      - cell "Television"
      - cell "$20.99"
      - cell:
        - checkbox
    - row "8 Action Camera $15.99":
      - cell "8"
      - cell "Action Camera"
      - cell "$15.99"
      - cell:
        - checkbox
    - row "9 Gaming Console $5.99":
      - cell "9"
      - cell "Gaming Console"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "10 Digital Camera $16.99":
      - cell "10"
      - cell "Digital Camera"
      - cell "$16.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
    - rowgroup:
      - row "0 94":
        - cell "0"
        - cell "94"
      - row "1 92":
        - cell "1"
        - cell "92"
      - row "2 82":
        - cell "2"
        - cell "82"
      - row "3 60":
        - cell "3"
        - cell "60"
      - row "4 52":
        - cell "4"
        - cell "52"
      - row "5 85":
        - cell "5"
        - cell "85"
      - row "6 84":
        - cell "6"
        - cell "84"
      - row "7 90":
        - cell "7"
        - cell "90"
      - row "8 92":
        - cell "8"
        - cell "92"
      - row "9 86":
        - cell "9"
        - cell "86"
      - row "10 58":
        - cell "10"
        - cell "58"
      - row "11 57":
        - cell "11"
        - cell "57"
      - row "12 81":
        - cell "12"
        - cell "81"
      - row "13 87":
        - cell "13"
        - cell "87"
      - row "14 89":
        - cell "14"
        - cell "89"
      - row "15 80":
        - cell "15"
        - cell "80"
      - row "16 76":
        - cell "16"
        - cell "76"
      - row "17 60":
        - cell "17"
        - cell "60"
      - row "18 54":
        - cell "18"
        - cell "54"
      - row "19 95":
        - cell "19"
        - cell "95"
      - row "20 95":
        - cell "20"
        - cell "95"
      - row "21 89":
        - cell "21"
        - cell "89"
      - row "22 95":
        - cell "22"
        - cell "95"
      - row "23 84":
        - cell "23"
        - cell "84"
      - row "24 58":
        - cell "24"
        - cell "58"
      - row "25 55":
        - cell "25"
        - cell "55"
      - row "26 83":
        - cell "26"
        - cell "83"
      - row "27 94":
        - cell "27"
        - cell "94"
      - row "28 100":
        - cell "28"
        - cell "100"
      - row "29 91":
        - cell "29"
        - cell "91"
  - text: 4,234,423
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Print all table values and check all checkboxes across pages', async ({ page }) => {
   4 |   await page.goto('https://testautomationpractice.blogspot.com/');
   5 |
   6 |
   7 |   // Print headers
   8 |   const headerElements = await page.locator('table#productTable th').all();
   9 |   const headers :string[] = [];
  10 |   for (const headerElement of headerElements) {
  11 |     headers.push((await headerElement.textContent())!.trim());
  12 |   }
  13 |   console.log('Headers:', headers.map(h => h.trim()).join(' | '));
  14 |
  15 |     const pageCount  = await page.locator("ul.pagination li").count()
  16 |
  17 |
  18 |   // Loop through all pages
  19 |   for(let k =0; k<pageCount ; k++){
  20 |     const rowLocator = page.locator('table#productTable tbody tr');
  21 |     const rowCount = await rowLocator.count();
  22 |
  23 |     for (let i = 0; i < rowCount; i++) {
  24 |       const row = rowLocator.nth(i);
  25 |       const cellLocator = row.locator('td');
  26 |       const cellCount = await cellLocator.count();
  27 |       const cellValues : string[]= [];
  28 |
  29 |       for (let j = 0; j < cellCount - 1; j++) { // skip checkbox column for value printing
  30 |         const cellText = await cellLocator.nth(j).textContent();
  31 |         cellValues.push(cellText!.trim());
  32 |       }
  33 |
  34 |       console.log(cellValues.join(' | '));
  35 |
  36 |       // Check the checkbox in the last column
  37 |       const checkbox = cellLocator.nth(cellCount - 1).locator('input[type="checkbox"]');
> 38 |       await checkbox.check();
     |                      ^ Error: locator.check: Test timeout of 30000ms exceeded.
  39 |       await expect(checkbox).toBeChecked()
  40 |     }
  41 |   const paginationButtons = page.locator('ul.pagination li a');
  42 |
  43 |     // Try to click the next page button (›)
  44 |      if (k < pageCount - 1) {
  45 |       await paginationButtons.nth(k + 1).click(); // Go to next page
  46 |       await page.waitForTimeout(500); // Wait for data to load
  47 |     }
  48 |
  49 | // 
  50 |     // Click next and wait
  51 |   }
  52 | });
  53 |
```