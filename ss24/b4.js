let arr = [];
let rows, cols;
let leave = true;

while (leave) {
    let choice = +prompt(`
        === Menu ===
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
        Nhập lựa chọn của bạn:
    `);

    switch (choice) {
        case 1: // Nhập mảng 2 chiều
            rows = +prompt("Nhập số hàng:");
            cols = +prompt("Nhập số cột:");
            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                }
            }
            alert("Đã nhập mảng thành công.");
            break;

        case 2: // Hiển thị mảng 2 chiều
            if (arr.length === 0) {
                alert("Mảng hiện tại rỗng.");
            } else {
                let display = arr.map(row => row.join(" ")).join("\n");
                alert("Mảng hiện tại:\n" + display);
            }
            break;

        case 3: // Tính tổng các phần tử trong mảng
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể tính tổng.");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        sum += arr[i][j];
                    }
                }
                alert("Tổng các phần tử trong mảng là: " + sum);
            }
            break;

        case 4: // Tìm phần tử lớn nhất và chỉ số của nó
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể tìm phần tử lớn nhất.");
            } else {
                let max = arr[0][0];
                let maxRow = 0, maxCol = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất là ${max} tại hàng ${maxRow + 1}, cột ${maxCol + 1}.`);
            }
            break;

        case 5: // Tính trung bình cộng các phần tử của một hàng cụ thể
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                let targetRow = +prompt(`Nhập hàng cần tính trung bình cộng (1 - ${rows}):`) - 1;
                if (targetRow >= 0 && targetRow < rows) {
                    let sum = arr[targetRow].reduce((total, num) => total + num, 0);
                    alert(`Trung bình cộng của hàng ${targetRow + 1} là: ${sum / cols}`);
                } else {
                    alert("Số hàng không hợp lệ.");
                }
            }
            break;

        case 6: // Đảo ngược các hàng trong mảng
            if (arr.length === 0) {
                alert("Mảng rỗng. Không thể thực hiện thao tác.");
            } else {
                for (let i = 0; i < rows; i++) {
                    arr[i].reverse();
                }
                alert("Các hàng đã được đảo ngược.");
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
