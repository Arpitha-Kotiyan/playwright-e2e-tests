import { test, expect } from "@playwright/test"



test.describe("Login Functionality", () => {

    test.beforeEach("Go to login page", async ({ page }) => {
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await expect(page).toHaveTitle("CURA Healthcare Service")
        await expect(page.locator("h1")).toHaveText("CURA Healthcare Service")

        //click on thE make appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await expect(page.getByText("Please login to make appointment.")).toBeVisible();

    });


    test('Should login successfully', async ({ page }) => {


        //login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();

        //assert a text
        await expect(page.locator("h2")).toContainText("Make Appointment");


    });

    test('Should prevent login with incorrct creds', async ({ page }) => {


        await page.getByLabel("Username").fill("John smith");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();


        await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

    });


});

