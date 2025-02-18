import { test } from '@playwright/test';
import fs from 'fs';
import * as path from 'path'; // Use `* as path` for ESM
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { fileURLToPath } from 'url';

// test.beforeEach(async ({ page }) => {
//     await page.goto("https://demoqa.com/");
//     await expect(page).toHaveTitle("DEMOQA");
// });

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.only('Visual regression test with highlighted differences', async ({ page }) => {
    console.log('page123',page)
  const baselinePath = path.join(__dirname, 'snapshots/aboutus-baseline.png');
  const actualPath = path.join(__dirname, 'snapshots/aboutus-actual.png');
  const diffPath = path.join(__dirname, 'snapshots/aboutus-diff.png');

  await page.goto('https://scopepropertydev.demoz.agency/about-us');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: actualPath });

  if (!fs.existsSync(baselinePath)) {
    fs.copyFileSync(actualPath, baselinePath);
    console.log('Baseline image created. Run the test again to compare.');
    return;
  }

  const baselineImg = PNG.sync.read(fs.readFileSync(baselinePath));
  const actualImg = PNG.sync.read(fs.readFileSync(actualPath));
  const { width, height } = baselineImg;
  const diffImg = new PNG({ width, height });

  const diffPixels = pixelmatch(
    baselineImg.data,
    actualImg.data,
    diffImg.data,
    width,
    height,
    { threshold: 0.1 }
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diffImg));

  if (diffPixels > 0) {
    console.log(`Differences detected: ${diffPixels} pixels.`);
    console.log(`Check the diff image here: ${diffPath}`);
  } else {
    console.log('No differences detected.');
  }
});