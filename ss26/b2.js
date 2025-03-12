let array = [];
for (let i = 0; i < 4; i++) {
    let temp = prompt("Nhập chuỗi chứa ký tự ");
    array[i] = temp;
}
function CheckLetter(arr) {
    const result = arr.filter(str => str.length > 5);
    return result.length > 0 ? result : console.log("Mảng không có phần tử nào");
}
console.log(CheckLetter(array));