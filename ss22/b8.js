
let numberArr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 5, 5, 5, 7];
let max = 0;
let valueMax = 0;

for (let i = 0; i <= 9; i++) {
    let flag = 0;

    for (let j = 0; j < numberArr.length; j++) {
        if (numberArr[j] == i) {
            flag++; // Đếm số lần xuất hiện của i
        }
    }

    if (flag > max) {
        max = flag;
        valueMax = i;
    }
}

console.log("Giá trị xuất hiện nhiều nhất là: " + valueMax + " (xuất hiện " + max + " lần)");
