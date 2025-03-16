let numbArr = [];
let n = +prompt("Nhập số lượng phần tử ");
for (let i = 0; i < n; i++) {
    numbArr[i] = +prompt("Nhập số thứ :" + [i + 1]);
}
function check(arr) {
    let missInteger = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            console.log("Số thiêu :" + i);
            missInteger.push(i);
        }
    }
    return missInteger;
}
console.log(check(numbArr)); 7
