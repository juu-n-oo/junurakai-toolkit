const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 900 },
  { name: 'desktop-1440', width: 1440, height: 960 }
];

for (const viewport of viewports) {
  test(`representative home state: ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));

    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await page.mouse.move(-1, -1);
    await expect(page).toHaveScreenshot(`home-${viewport.name}.png`, { fullPage: false });
    expect(pageErrors).toEqual([]);
  });
}
