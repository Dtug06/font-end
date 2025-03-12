let numbers = [];
for (let i = 0; i < 10; i++) {
    let input;
    do {
        input = prompt(`Nhập số thứ ${i + 1}:`); // Hiển thị prompt cho người dùng nhập số
    } while (isNaN(input) || input.trim() === ""); // Kiểm tra xem input có phải số hợp lệ hay không
    numbers[i] = parseFloat(input); // Chuyển thành số và thêm vào mảng
}
console.log("Mảng các số vừa nhập:", numbers);

function maxNumb(arr) {
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let max = arr[0];
    let maxIndex = 0;


    arr.forEach((value, index) => {
        if (value > max) {
            max = value;
            maxIndex = index;
        }
    });
    return `Giá trị lớn nhất: ${max}, Vị trí: ${maxIndex}`;
}
console.log(maxNumb(numbers));
