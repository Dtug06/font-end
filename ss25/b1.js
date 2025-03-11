let arr = prompt("Nhập mảng số nguyên (cách nhau bằng dấu phẩy):")
    .split(",") // Tách chuỗi thành mảng dựa trên dấu phẩy
    .map(Number); // Chuyển từng phần tử thành số
function array(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < temp) {
            temp = arr[i];
        }
    }
    if (arr.lenght == 0) {
        console.log("Mảng không có phần tử nào ");
    } else if (Number.isInteger(temp)) {
        return temp;
    } else {
        console.log("Giá trị không hợp lệ ");
    }
}
console.log(array(arr));
