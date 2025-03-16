// let strNum;
// do {
//     strNum = +prompt("Nhập 1 số nguyên");
// } while (!Number.isInteger(strNum));
// let newStrNumb = strNum.split("");
// for (let i = 0; i < newStrNumb.length; i++) {
//     for (let j = 0; j < newStrNumb.length - 1 - i; j++) {
//         if (newStrNumb[j] < newStrNumb[j + 1]) {
//             let temp = newStrNumb[j];
//             newStrNumb[j] = newStrNumb[j + 1];
//             newStrNumb[j + 1] = temp;
//         }
//     }
// }
// Number(newStrNumb);
// console.log("Số có thể tạo ra giá trị lớn nhất là" + newStrNumb);
let strNum;
do {
    strNum = +prompt("Nhập 1 số nguyên");
} while (!Number.isInteger(strNum));

let digits = strNum.toString().split("");
digits.sort((a, b) => b - a);
let largestNum = Number(digits.join(""));
console.log("Số có thể tạo ra giá trị lớn nhất là: " + largestNum);

