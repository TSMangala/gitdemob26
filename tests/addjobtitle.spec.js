const { test, expect } = require('@playwright/test');

test('Verify can add the Job title', async ({ page }) => {
   
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page.locator("img[alt='company-branding']")).toBeVisible()

    await page.locator("input[name='username']").fill("Admin")

 await page.locator("input[type='password']").fill("admin123")

 await page.locator("button[type='submit']").click()

 await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
 await page.locator("(//span[normalize-space(text())='Job']").click()
 await page.locator("(//a[normalize-space(text())='Job Titles']").click()
 await page.locator("(//button[contains(.,'Add')]").click()

 await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')
 await page.locator("((//input[@class='oxd-input oxd-input--active'])[2]").fill("QA Engineer II")
 await page.locator("//textarea[@placeholder='Type description here']").fill("Testing Activities")
 await page.locator("//button[@type='submit']").click()
 
 await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
});
