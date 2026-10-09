import { test, expect } from "@playwright/test"

test('should load homepage with correct title', async ({ page }) => {
    // go to home page


    await page.goto("https://katalon-demo-cura.herokuapp.com/")

    // assert if title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service")

    // assert header text
    await expect(page.locator("h1")).toHaveText("CURA Healthcare Service")

});
test.only("somthig demo", async ({page})=>{
 await page.goto('https://katalon-demo-cura.herokuapp.com/');
  let makeappoint= page.getByRole('link', { name: 'Make Appointment' }).click();
  
 // console.log(`>> type of locator: ${typeof makeappoint}, the value of locator is: ${JSON.stringify(makeappoint)}`);
  
//await expect(page.getByText('Please login to make')).toBeVisible();


}); 
