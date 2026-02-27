const { test, expect } = require('@playwright/test');

test('Verify logo visible', async ({ page }) => {
   
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page.locator("img[alt='company-branding']")).toBeVisible()
});
test('Verify logo with valid credentials', async ({ page }) => {
  //Launch Url 
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//Enter Username
  
  await page.locator("input[name='username']").fill("Admin")
//ENTER Password
await page.locator("input[type='password']").fill("admin123")
//Click on Login Button
  await page.locator("button[type='submit']").click()
  //verify navigating to Dashboard

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
});

test('Verify logo with valid username and invalid password', async ({ page }) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await page.locator("input[name='username']").fill("Admin")
  await page.locator("input[type='password']").fill("mangalaa")
  await page.locator("button[type='submit']").click()
  //Verify Displaying Error message

  await expect(page.getByText('Invalid credentials')).toBeVisible()
});

test('Verify logo with invalid username and valid password', async ({ page }) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await page.locator("input[name='username']").fill("mangalaAdmin")
  await page.locator("input[type='password']").fill("admin123")
  await page.locator("button[type='submit']").click()

  await expect(page.getByText('Invalid credentials')).toBeVisible()
});
test('Verify logo with invalid username and invalid password', async ({ page }) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await page.locator("input[name='username']").fill("mangalaAdmin")
  await page.locator("input[type='password']").fill("mangalaa123")
  await page.locator("button[type='submit']").click()

  await expect(page.getByText('Invalid credentials')).toBeVisible()
});