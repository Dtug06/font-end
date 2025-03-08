let n;
do {
    n = +prompt("Nhập số lượng phần tử trong mảng (n >= 0):");
} while (!Number.isInteger(n) || n < 0);

let mixedArray = [];

for (let i = 0; i < n; i++) {
    let element = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    mixedArray.push(element);
}

console.log("Mảng vừa nhập:", mixedArray);

let count = 0;
console.log(mixedArray);
for (let i = 0; i < mixedArray.length; i++) {
    let temp = mixedArray[i] - 0;
    if (Number.isInteger(temp)) {
        count += temp;
    }
}
if (count <= 0) {
    console.log("Không có ký tự số");
} else {
    console.log("Tổng các ký tự số" + count);
}
