let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
let n;
let find = false;
do {
    n = +prompt("nhap so muon tim kiem ");
} while (!Number.isInteger(n));
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == n) {
        console.log("Bingo");
        find = true;
        break;
    }
}
if (find == false) {
    console.log("Chúc bạn may mắn lần sau ");
}