
let nameStudent = [];
let n = +prompt("Nhập số lượng sinh viên: ");
for (let i = 0; i < n; i++) {
    nameStudent[i] = prompt(`Nhập đầy đủ tên sinh viên thứ ${i + 1}:`);
}
console.log("Danh sách sinh viên ban đầu:", nameStudent);

function binary(choice) {
    switch (choice) {
        case 1: // In ra màn hình danh sách sinh viên
            console.log("Danh sách sinh viên hiện tại:", nameStudent);
            break;

        case 2: // Tìm sinh viên theo tên
            let nameToFind = prompt("Nhập tên sinh viên muốn tìm:");
            let found = false;
            for (let i = 0; i < nameStudent.length; i++) {
                if (nameStudent[i].indexOf(nameToFind) !== -1) {
                    console.log("Tìm thấy:", nameStudent[i]);
                    found = true;
                }
            }
            if (!found) {
                console.log("Không tìm thấy tên sinh viên trong danh sách.");
            }
            break;

        case 3: // Xóa sinh viên khỏi danh sách
            let nameToDelete = prompt("Nhập tên sinh viên muốn xóa:");
            let removed = false;
            for (let i = 0; i < nameStudent.length; i++) {
                if (nameStudent[i].indexOf(nameToDelete) !== -1) {
                    nameStudent.splice(i, 1);
                    removed = true;
                    console.log(`Đã xóa sinh viên: ${nameToDelete}`);
                    break;
                }
            }
            if (!removed) {
                console.log("Không có tên sinh viên trong danh sách.");
            }
            break;

        case 4: // Thoát chương trình
            console.log("Thoát chương trình.");
            return;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
            break;
    }
}

let choice = +prompt(`===== Menu =====
1. In ra màn hình danh sách sinh viên
2. Tìm sinh viên theo tên
3. Xóa sinh viên khỏi danh sách
4. Thoát
Nhập lựa chọn:`);
binary(choice);




