// Khai báo mảng chứa tất cả tài khoản người dùng
let users = [];

function registerEmail() {
    // Nhập tài khoản email từ người dùng
    let email = prompt("Nhập email bạn muốn đăng ký:");

    // Kiểm tra tính hợp lệ của email
    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".vn"))) {
        console.log("Email không hợp lệ! Vui lòng nhập lại email.");
        return; // Kết thúc hàm nếu email không hợp lệ
    }

    // Kiểm tra nếu email đã tồn tại trong mảng users
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        // Thêm email vào mảng users
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}

// Gọi hàm để đăng ký email nhiều lần
registerEmail();
console.log("Danh sách tài khoản người dùng:", users);
