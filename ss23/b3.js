let n;
let count = 0;
do {
    n = +prompt("nhap so luong phan tu");
} while (!Number.isInteger(n));
let numberArr = [];
for (let i = 0; i < n; i++) {
    do {
        numberArr[i] = +prompt("Nhap phan tu thu" + [i + 1]);
    } while (!Number.isInteger(numberArr[i]));
}
if (n > 0) {
    for (let j = 0; j < numberArr.length; j++) {
        if (numberArr[j] < 0) {
            count++;
        }
    }
    if (count > 0) {
        console.log("Số phần tử âm " + count);
    } else {
        console.log("Không có phần tử âm");
    }
} else if (n == 0) {
    console.log("Không có phần tử nào");
} else {
    console.log("Số lượng phânf tử không hợp lệ !");
}