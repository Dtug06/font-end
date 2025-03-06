let strNumber;
do {
    strNumber = +prompt("Nhập dãy số ");
} while (!Number.isInteger(strNumber));
strNumber = strNumber.toString();
let newStr = "";
for (let i = strNumber.length; i > 0; i--) {
    newStr += strNumber[i - 1];
}
console.log(newStr);
