/*test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 3: Todo page”.
a. Thêm mới 100 todo item có nội dung “Todo <i>”
b. Xoá các todo có số lẻ*/



import { test} from '@playwright/test';

test('bai thuc hanh 1', async ({ page }) => {

await test.step('Di toi trang chu material', async() => {
await page.goto("https://material.playwrightvn.com/");
});

await test.step('Click vao bai 3: Todo page', async () => {
await page.locator("//a[@href='03-xpath-todo-list.html']").click();
});




for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
    await page.locator("//button[@id='add-task']").click();
  }





// Xóa các todo số lẻ
  for (let i = 1; i <= 100; i += 2) {
    // Tự động bấm OK trên hộp thoại confirm
    page.once('dialog', async dialog => {
      await dialog.accept();
    });

    // Click nút Delete của Todo i
    await page.locator(`//li[span[text()='Todo ${i}']]//button[@id='todo-${i}-delete']`).click();
  }


});

