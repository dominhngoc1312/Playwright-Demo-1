/*Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
a. Sản phẩm 1: 2 sản phẩm
b. Sản phẩm 2: 3 sản phẩm
c. Sản phẩm 3: 1 sản phẩm*/



import { test} from '@playwright/test';

test('bai thuc hanh 1', async ({ page }) => {

await test.step('Di toi trang chu material', async() => {
await page.goto("https://material.playwrightvn.com/");
});

await test.step('Click vao bai 2: Production page', async () => {
await page.locator("//a[@href='02-xpath-product-page.html']").click();
});

await test.step('Add Sản phẩm 1: 2 sản phẩm', async() => {
await page.locator("//button[@data-product-id='1']").dblclick();
});

await test.step('Add Sản phẩm 2: 3 sản phẩm', async() => {
await page.locator("//button[@data-product-id='2']").dblclick();
await page.locator("//button[@data-product-id='2']").click();
});

await test.step('Add Sản phẩm 3: 1 sản phẩm', async() => {
await page.locator("//button[@data-product-id='3']").click();
});
});