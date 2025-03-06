let strNumber;
do {
    strNumber = +prompt("nhập dãy số");
} while (!Number.isInteger(strNumber));
strNumber = strNumber.toString();
let max = 0;
for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] > max) {
        max = strNumber[i];
    }
}
console.log(max + " là giá trị lớn nhất trong dãy số ");
