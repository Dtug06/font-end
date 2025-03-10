let arr = [];
let n;
let leave = true;
let choice;

while (leave) {
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");
    choice = +prompt("Nhập lựa chọn:");
    switch (choice) {
        case 1:
            n = +prompt("Nhập độ dài mảng:");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
            }
            break;
        case 2: // Hiển thị mảng
            console.log("Mảng hiện tại:", arr);
            break;
        case 3: // Tìm phần tử lớn nhất và nhỏ nhất
            if (arr.length === 0) {
                console.log("Mảng rỗng. Không thể tìm giá trị lớn nhất và nhỏ nhất.");
                break;
            }
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log("Giá trị lớn nhất:", max);
            console.log("Giá trị nhỏ nhất:", min);
            break;
        case 4: // Tính tổng phần tử trong mảng
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Tổng các phần tử trong mảng là:", sum);
            break;
        case 5: // Tìm số lần xuất hiện của một phần tử
            let count = 0;
            let key = +prompt("Nhập phần tử để tìm kiếm:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === key) {
                    count++;
                }
            }
            if (count > 0) {
                console.log("Phần tử " + key + " xuất hiện " + count + " lần.");
            } else {
                console.log("Không có phần tử " + key + " nào trong mảng.");
            }
            break;
        case 6: // Sắp xếp mảng tăng dần
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            break;
        case 7:
            console.log("Thoát chương trình.");
            leave = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
    }
}
