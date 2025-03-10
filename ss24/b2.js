let arr = [];
let n;
let leave = true;

while (leave) {
    // Hiển thị menu
    let choice = +prompt(`
        === Menu ===
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ 2 trong mảng
        7. Thoát chương trình
        Vui lòng nhập lựa chọn của bạn:
    `);

    // Xử lý lựa chọn người dùng
    switch (choice) {
        case 1: // Nhập mảng
            n = +prompt("Nhập độ dài mảng:");
            arr = []; // Làm mới mảng
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
            }
            alert("Đã nhập mảng thành công.");
            break;

        case 2: // Hiển thị mảng
            if (arr.length === 0) {
                alert("Mảng hiện tại rỗng.");
            } else {
                alert("Mảng hiện tại: " + arr.join(", "));
            }
            break;

        case 3: // Tìm các phần tử chẵn và lẻ
            if (arr.length === 0) {
                alert("Mảng rỗng. Không có phần tử chẵn/lẻ.");
            } else {
                let even = arr.filter(num => num % 2 === 0);
                let odd = arr.filter(num => num % 2 !== 0);
                alert("Phần tử chẵn: " + even.join(", "));
                alert("Phần tử lẻ: " + odd.join(", "));
            }
            break;

        case 4: // Tính trung bình cộng của mảng
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể tính trung bình cộng.");
            } else {
                let sumTb = arr.reduce((sum, num) => sum + num, 0);
                alert("Trung bình cộng của mảng là: " + (sumTb / arr.length));
            }
            break;

        case 5: // Xóa phần tử tại vị trí chỉ định
            let index = +prompt("Nhập vị trí phần tử muốn xóa (0 - " + (arr.length - 1) + "):");
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                alert("Phần tử đã được xóa. Mảng hiện tại: " + arr.join(", "));
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;

        case 6: // Tìm phần tử lớn thứ 2 trong mảng
            if (arr.length < 2) {
                alert("Mảng không đủ phần tử để tìm phần tử lớn thứ 2.");
            } else {
                let max = Math.max(...arr);
                let filteredArr = arr.filter(num => num !== max);
                if (filteredArr.length === 0) {
                    alert("Mảng chỉ có các phần tử giống nhau.");
                } else {
                    let secondMax = Math.max(...filteredArr);
                    alert("Phần tử lớn thứ 2 trong mảng là: " + secondMax);
                }
            }
            break;

        case 7: // Thoát chương trình
            alert("Thoát chương trình.");
            leave = false;
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
}
