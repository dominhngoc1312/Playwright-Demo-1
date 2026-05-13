/* Tạo file ex3.js, thêm vào đáp án cho câu hỏi sau: Cho 2 biến: a = true, b = false, c =
true. Theo bạn, kết quả của các biểu thức sau là gì?
a. a && b && c
b. a && b || c */

// a. false
// b. true

let a = true;
let b = false;
let c = true;

const result1 = a && b && c;
const result2 = a && b || c;

console.log(result1);
console.log(result2);