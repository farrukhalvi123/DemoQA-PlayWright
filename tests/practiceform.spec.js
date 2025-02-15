import { test, expect } from '@playwright/test';
import { Practicepage } from '../Pages/PracticeformPages';
import * as path from 'path';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await expect(page).toHaveTitle("DEMOQA");
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Practice form test", async ({ page }) => {
    const prac = new Practicepage(page);
    await prac.go_to_practiceform();
     
    const cwd = process.cwd();
    const fpath = path.join(cwd, "Data Flow Diagram Whiteboard in Red Light Red Monochromatic Style (2).png");

    await prac.enter_textfields("farrukh", "alvi", "fja@yopmail.com", "1234567890", "2025-02-01", fpath);
    await prac.clickers();
});
