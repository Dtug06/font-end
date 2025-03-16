// function integerMenu() {
//     switch (choice) {
//         case 1: // Nhập danh sách số nguyên
//             console.log("Bạn đã chọn: Nhập danh sách số nguyên");
//             // Logic cho nhập danh sách số nguyên
//             {
//                 let n = +prompt("Nhập số lượng số nguyên");
//                 for (let i = 0; i < n; i++) {
//                     integerArray[i] = +prompt("Nhập phần tử thứ :"[i + 1]);
//                 }
//                 console.log(integerArray);
//             }
//             break;

//         case 2: // Tính trung bình các số
//             console.log("Bạn đã chọn: Tính trung bình các số");
//             // Logic cho tính trung bình
//             {
//                 let sum = 0;
//                 for (let i = 0; i < integerArray.length; i++) {
//                     sum += integerArray[i];
//                 }
//                 console.log(sum);
//             }
//             break;

//         case 3: // Tìm số chẵn lớn nhất
//             console.log("Bạn đã chọn: Tìm số chẵn lớn nhất");
//             // Logic cho tìm số chẵn lớn nhất
//             {
//                 let maxEven = 0;
//                 for (let i = 0; i < integerArray.length; i++) {
//                     if (integerArray[i] > maxEven && integerArray[i] % 2 == 0) {
//                         max = integerArray[i];
//                     }
//                 }
//                 console.log("Phần tử lớn nhất trong mảng số nguyên là:" + maxEven);
//             }
//             break;

//         case 4: // Tìm số lẻ nhỏ nhất
//             console.log("Bạn đã chọn: Tìm số lẻ nhỏ nhất");
//             // Logic cho tìm số lẻ nhỏ nhất
//             {
//                 let minOdd = 0;
//                 for (let i = 0; i < integerArray.length; i++) {
//                     if (integerArray[i] < min && integerArray[i] % 2 != 0) {
//                         minOdd = integerArray[i];
//                     }
//                 }
//                 console.log("Phần tử lớn nhất trong mảng số nguyên là:" + minOdd);
//             }
//             break;

//         case 5: // Thoát
//             console.log("Bạn đã chọn: Thoát chương trình");
//             return; // Kết thúc chương trình

//         default: // Xử lý lựa chọn không hợp lệ
//             console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
//             break;
//     }
// }

// // Hiển thị menu và gọi hàm
// let choice = +prompt(`===== Menu =====
// 1. Nhập danh sách số nguyên
// 2. Tính trung bình các số
// 3. Tìm số chẵn lớn nhất
// 4. Tìm số lẻ nhỏ nhất
// 5. Thoát
// Nhập lựa chọn:`);
// let integerArray = [];
// integerMenu();
function integerMenu() {
    while (true) { // Lặp cho đến khi người dùng chọn thoát
        let choice = +prompt(`===== Menu =====
1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
Nhập lựa chọn:`);

        switch (choice) {
            case 1: // Nhập danh sách số nguyên
                console.log("Bạn đã chọn: Nhập danh sách số nguyên");
                {
                    let n = +prompt("Nhập số lượng số nguyên:");
                    integerArray = []; // Đảm bảo làm mới mảng trước mỗi lần nhập mới
                    for (let i = 0; i < n; i++) {
                        integerArray[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                    }
                    console.log("Danh sách số nguyên:", integerArray);
                }
                break;

            case 2: // Tính trung bình các số
                console.log("Bạn đã chọn: Tính trung bình các số");
                if (integerArray.length > 0) {
                    let sum = 0;
                    for (let i = 0; i < integerArray.length; i++) {
                        sum += integerArray[i];
                    }
                    console.log("Trung bình các số:", sum / integerArray.length);
                } else {
                    console.log("Danh sách số nguyên trống, vui lòng nhập danh sách trước!");
                }
                break;

            case 3: // Tìm số chẵn lớn nhất
                console.log("Bạn đã chọn: Tìm số chẵn lớn nhất");
                if (integerArray.length > 0) {
                    let maxEven = null;
                    for (let i = 0; i < integerArray.length; i++) {
                        if (integerArray[i] % 2 === 0 && (maxEven === null || integerArray[i] > maxEven)) {
                            maxEven = integerArray[i];
                        }
                    }
                    if (maxEven !== null) {
                        console.log("Số chẵn lớn nhất là:", maxEven);
                    } else {
                        console.log("Không có số chẵn trong danh sách!");
                    }
                } else {
                    console.log("Danh sách số nguyên trống, vui lòng nhập danh sách trước!");
                }
                break;

            case 4: // Tìm số lẻ nhỏ nhất
                console.log("Bạn đã chọn: Tìm số lẻ nhỏ nhất");
                if (integerArray.length > 0) {
                    let minOdd = null;
                    for (let i = 0; i < integerArray.length; i++) {
                        if (integerArray[i] % 2 !== 0 && (minOdd === null || integerArray[i] < minOdd)) {
                            minOdd = integerArray[i];
                        }
                    }
                    if (minOdd !== null) {
                        console.log("Số lẻ nhỏ nhất là:", minOdd);
                    } else {
                        console.log("Không có số lẻ trong danh sách!");
                    }
                } else {
                    console.log("Danh sách số nguyên trống, vui lòng nhập danh sách trước!");
                }
                break;

            case 5: // Thoát
                console.log("Bạn đã chọn: Thoát chương trình");
                return; // Kết thúc vòng lặp và chương trình

            default: // Xử lý lựa chọn không hợp lệ
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
                break;
        }
    }
}

// Biến lưu danh sách số nguyên
let integerArray = [];
integerMenu(); // Gọi hàm để bắt đầu chương trình
