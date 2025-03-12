
let users = [];
function registerEmail() {
    while (true) {
        let email = prompt("Nhập email bạn muốn đăng ký (nhập 'exit' để thoát):");
        if (email.toLowerCase() === "exit") {
            console.log("Bạn đã thoát chương trình.");
            break; // Thoát khỏi vòng lặp
        }
        if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".vn"))) {
            console.log("Email không hợp lệ! Vui lòng nhập lại.");
            continue; // Quay lại vòng lặp để nhập lại
        }


        if (users.includes(email)) {
            console.log("Tài khoản đã tồn tại!");
        } else {

            users.push(email);
            console.log("Đăng ký thành công!");
        }
    }
}


registerEmail();
console.log("Danh sách tài khoản người dùng:", users);
