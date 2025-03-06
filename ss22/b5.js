let n = +prompt("nhap so luong phan tu ");
let numbeEven = 0;
let numbeOdd = 0;
let numberArr = [];
for (let i = 0; i < n; i++) {
    do {
        numberArr[i] = +prompt("nhap phan tu thu " + [i + 1]);
    } while (!Number.isInteger(numberArr[i]));
}
for (let i = 0; i < n; i++) {
    if (numberArr[i] % 2 == 0) {
        numbeEven += numberArr[i];
    } else {
        numbeOdd += numberArr[i];
    }
}
console.log("Tổng các số chẵn " + numbeEven);
console.log("Tổng các số lẻ " + numbeOdd);

