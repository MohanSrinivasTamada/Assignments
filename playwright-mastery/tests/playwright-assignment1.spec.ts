import {test, expect, Page} from '@playwright/test'

test('Playwright Assignment', async ({page})=>{
    
// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto('https://parabank.parasoft.com/parabank/index.htm');
// 2.verify application logo is displayed
const logo = await page.locator('img.logo');
await expect(logo).toBeVisible();
// 3.Verify application caption displayed as "Experience the difference"
const captionText = "Experience the difference";
const captionObj = await page.locator('p.caption');
await expect(captionObj).toHaveText(captionText);
// 4.Enter invalid username
const usernameInput = await page.locator('input[name="username"]');
await usernameInput.clear();
await usernameInput.fill("invalid");
// 5.Enter empty Password
const passwordInput = await page.locator('input[type="password"]');
await passwordInput.clear();
await passwordInput.fill(" ")
// 6.Click on login button
const loginButton = await page.locator('input[value="Log In"]');
await loginButton.click();
// 7.Verify the error message "Please enter a username and password."
const expectedErrorMsg = "The username and password could not be verified."
const ActualErrorMsg = await page.locator('p.error').textContent();
await expect(ActualErrorMsg).toBe(expectedErrorMsg);
// 8.Click on admin page link
const adminLink = await page.locator('ul.leftmenu > li > a[href*="admin"]');
await adminLink.click();
// 9.select the option "soap" from dba mode radio button
await dbaMode(page,"soap");
// 10.Scroll to element dropdown
const loanProviderdropdown = await page.locator('select#loanProvider');
await loanProviderdropdown.scrollIntoViewIfNeeded();
// 11.Select the option web service from the dropdown
await loanProviderdropdown.selectOption({label:"Web Service"});
console.log(`user has selected the dropdown value Web Service`)
// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();
// 13.verify submission is successful by validating success message
const expSuccessMsg = "Settings saved successfully.";
const actSuccessMsg = await page.locator('div#rightPanel>p>b').textContent();
await expect(actSuccessMsg).toBe(expSuccessMsg);
console.log('submission is successful by validating success message');
// 14.Click on services page link
const servicesLink = await page.locator('ul.leftmenu>li>a[href*="services"]');
await servicesLink.click();
// 15.wait for service page
const servicePage = await page.locator('//div[@id="rightPanel"]//span[@class="heading"][1]');
await expect(servicePage).toBeVisible();
console.log('Service Page is loaded')
// 16.Scroll down till bookstore services table
const bookStoreServices = await page.locator('//div[@id="rightPanel"]//span[@class="heading"][2]');
await bookStoreServices.scrollIntoViewIfNeeded();
// 17.get total rows of books store services table
const bookServicesRows = await page.locator('//div[@id="rightPanel"]//table[2]//tbody//tr');
const rowCount = await bookServicesRows.count();
// 18.get total columns of books store services table
const bookServicesCol = await page.locator('//div[@id="rightPanel"]//table[2]//tbody//tr[1]//td');
const colCount = await bookServicesCol.count();
// 19.Print table data (row wise and column wise data)
for(let r=1;r<=rowCount;r++){
    for(let c=1;c<=colCount;c++){
        const cell = await page.locator(`//div[@id="rightPanel"]//table[2]//tbody//tr[${r}]//td[${c}]`);
        const cellText = await cell.textContent();
        console.log(`the Text available in the ${r}:row ${c}:column cell is ${cellText}`)
    }
}
})

async function dbaMode(page:any,dba:string) {
    const radioObj = await page.locator(`input[value="${dba}"]`);
    await radioObj.click();
    console.log(`user has selected the dba mode radio button ${dba}`);
}