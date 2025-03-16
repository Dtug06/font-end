let numbArr = [];
let n = +prompt("Nhập số lượng phần tử ");
for (let i = 0; i < n; i++) {
    numbArr[i] = +prompt("Nhập phần tử thứ :" + [i + 1]);
}
function checkSequenceOfNumbers(arr) {
    let flag = true;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] + arr[i - 1] != arr[i]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(flag);
    } else {
        console.log(flag);
    }
}
console.log(checkSequenceOfNumbers(numbArr));