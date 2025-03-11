function sum(a, b) {
    return a + b;
}
let a;
let b;
a = +prompt("Nhập số nguyên");
b = +prompt("Nhập số nguyên");
if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    console.log(sum(a, b));
}