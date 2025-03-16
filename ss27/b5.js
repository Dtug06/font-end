let numbArr = [];
let lengthArr = +prompt("Nhập só lượng phần tứ");
let n = +prompt("Số lượng phần tử con");
for (let i = 0; i < lengthArr; i++) {
    numbArr[i] = +prompt("Phần tử: " + [i + 1]);
}
function divideArr(array, n) {
    let subArraySize = Math.ceil(array.length / n);
    let result = [];
    for (let i = 0; i < array.length; i += subArraySize) {
        if (i == array.length - subArraySize - 1) {
            result.push(array.slice(i));
        }
        result.push(array.slice(i, i + subArraySize));
    }
    return result;
}
console.log(divideArr(numbArr, n));


