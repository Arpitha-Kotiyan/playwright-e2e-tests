import { test, expect } from '@playwright/test';


test.describe("Make Appontment", ()=>{

    test.beforeEach("Login with valid cred", async({page})=>{
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await expect(page).toHaveTitle("CURA Healthcare Service")
        await expect(page.locator("h1")).toHaveText("CURA Healthcare Service")

        //click on thE make appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await expect(page.getByText("Please login to make appointment.")).toBeVisible();
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();

    })
test('"Test should make an appointment with non default values "', async ({ page }) => {

  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '6' }).first().click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('tis is captured by playwright');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Appointment Confirmation');
  await page.getByRole('link', { name: 'Go to Homepage' }).click();
});

});

