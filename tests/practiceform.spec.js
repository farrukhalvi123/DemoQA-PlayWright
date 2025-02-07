import { test, expect } from '@playwright/test'
import * as path from 'path';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/")
    await expect(page).toHaveTitle("DEMOQA")

})

test.afterEach(async ({ page }) => {
    await page.close()

})
test("Practice form test", async ({ page, context }) => {

    await page.locator("//div[@class='home-body']//div[2]//div[1]//div[3]").click();
    await page.locator("//div[@class='element-list collapse show']//li[@id='item-0']").click();
    const element = page.locator('h1');
    await expect(element).toHaveText('Practice Form');
    await page.locator("//input[@id='firstName']").fill("FJ")
    await page.locator("//input[@id='lastName']").fill("FJA")
    await page.locator("//input[@id='userEmail']").fill("fja@yopmail.com")
    const phonefield = await page.locator("//input[@id='userNumber']")
    phonefield.fill("1236547890")
    await page.click("//label[normalize-space()='Male']")
    await page.locator("//input[@id='dateOfBirthInput']").fill('2025-02-01')
    const cwd = process.cwd();
    const fpath = path.join(cwd, "Data Flow Diagram Whiteboard in Red Light Red Monochromatic Style (2).png")
    await page.locator("//input[@id='uploadPicture']").setInputFiles(fpath)
    await page.click("//button[@id='submit']")

})