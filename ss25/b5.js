function countIntenger(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = Number(arr[i]);
        if (Number.isInteger(temp)) {
            count++;
        }
    }
    if (count > 0) {
        console.log(count);
    } else {
        console.log("Không có số nguyên dương trong mảng");
    }
}
let arr = prompt("Nhâp chuỗi cách nhau vởi dấu khoảng trắng");
arr = arr.split(" ").filter(element => element.trim() !== "");
console.log(arr);
countIntenger(arr);