import { test, expect } from "@chromatic-com/playwright";

// Then use as normal 👇
test("Shop", async ({ page }) => {  
  await page.goto("https://shopdemo-alex-hot.koyeb.app/login");  
  
  await expect(page).toHaveTitle("MERN Store");  
  
});