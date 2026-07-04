/*Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element)”
a. Nhập thông tin cho các field: Username, Email, Gender, Hobbies,
Interests, Country, Date of Birth, Profile Picture, Biography
b. Click button Register*/


import { test} from '@playwright/test';

test('bai thuc hanh 1', async ({ page }) => {

  await test.step('Di toi trang chu material', async() => {
    await page.goto("https://material.playwrightvn.com/");
  });

   await test.step('Click vao bai 1: Register Page (có đủ các element)', async () => {
  await page.locator("//a[@href='01-xpath-register-page.html']").click();
});
  

    await test.step('Dien vao o input username: user-01', async() => {
      await page.locator("//input[@id='username']").fill("user-01");
    });

     await test.step('Dien vao o input email: user-01@gmail.com', async() => {
      await page.locator("//input[@id='email']").pressSequentially("user-01@gmail.com", { delay : 200 });
    });

    await test.step('Chon Gender: Female', async() => {
      await page.locator("//input[@type='radio' and @id='male']").click();
    });

     await test.step('Chon Hobbies: Cooking', async() => {
      await page.locator("//input[@type='checkbox' and @id='cooking']").click();
    });

    await test.step('Chon Interests: Music', async() => {
      await page.locator("//option[@value='music']").click();
    });

     await test.step('Chon Country: uk', async() => {
     //  await page.locator("//select[@id='country']").click(); 
     // await page.locator("//option[@value='uk']").click();
     await page.locator("//select[@id='country']").selectOption("uk"); 
    });

    await test.step('Nhap DOB', async() => {
      await page.locator("//input[@id='dob']").fill("2026-06-28");
    });

    await test.step('Upload Profile Picture', async() => {
      await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/01-xpath.txt");
    });

    await test.step('Dien vao o input Biography: user-01 user-01', async() => {
      await page.locator("//textarea[@id='bio']").fill("user-01 user-01");
    });


     await test.step('Click button Register', async() => {
      await page.locator("//button[@type='submit']").click();
    });
});