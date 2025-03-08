let numberArr = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    do {
        numberArr[i] = +prompt("Nhap phan tu thu" + [i + 1]);
    } while (!Number.isInteger(numberArr[i]));
}
for (let i = 0; i < 10; i++) {
    if (numberArr[i] >= 10) {
        count++;
    }
}
console.log("Có " + count + " trong mảng lớn hơn hoặc bằng 10 ");

