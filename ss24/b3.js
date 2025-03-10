let arr = [];
let leave = true;

while (leave) {
    let choice = +prompt(`
        === Menu ===
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
        7. Thoát chương trình
        Nhập lựa chọn của bạn:
    `);

    switch (choice) {
        case 1: // Nhập mảng số nguyên
            let n = +prompt("Nhập số lượng phần tử trong mảng:");
            arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
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

        case 3: // Tìm phần tử lớn nhất và in ra chỉ số
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                let max = arr[0];
                let index = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        index = i;
                    }
                }
                alert(`Phần tử lớn nhất là ${max} tại chỉ số ${index}`);
            }
            break;

        case 4: // Tính tổng và trung bình cộng của các số dương
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                let sum = 0;
                let count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        sum += arr[i];
                        count++;
                    }
                }
                if (count > 0) {
                    let avg = sum / count;
                    alert(`Tổng các số dương: ${sum}, Trung bình cộng: ${avg.toFixed(2)}`);
                } else {
                    alert("Không có số dương nào trong mảng.");
                }
            }
            break;

        case 5: // Đảo ngược mảng
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                arr.reverse();
                alert("Mảng sau khi đảo ngược: " + arr.join(", "));
            }
            break;

        case 6: // Kiểm tra mảng có đối xứng không
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                if (isSymmetric) {
                    alert("Mảng đối xứng.");
                } else {
                    alert("Mảng không đối xứng.");
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
