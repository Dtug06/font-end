
let users = [];
function register() {
    const newUser = {};
    newUser.name = prompt("Nhập tên:");
    newUser.email = prompt("Nhập email:");
    while (!/^[\w-.]+@([\w-]+\.)+(com|vn)$/.test(newUser.email)) {
        alert("Email không hợp lệ. Vui lòng nhập email chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        newUser.email = prompt("Nhập email:");
    }
    if (users.some(user => user.email === newUser.email)) {
        console.log("Email này đã tồn tại. Vui lòng sử dụng email khác.");
        return;
    }

    newUser.password = prompt("Nhập mật khẩu (ít nhất 6 ký tự, gồm ký tự đặc biệt và viết hoa):");
    while (!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(newUser.password)) {
        alert("Mật khẩu không hợp lệ. Mật khẩu phải ít nhất 6 ký tự, gồm ít nhất 1 ký tự viết hoa và 1 ký tự đặc biệt.");
        newUser.password = prompt("Nhập mật khẩu:");
    }

    users.push(newUser);
    console.log("Đăng ký thành công!");
}

function login() {
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log("Đăng nhập thành công!");
        console.log("Thông tin người dùng:");
        console.log(`Tên: ${user.name}`);
        console.log(`Email: ${user.email}`);
    } else {
        console.log("Đăng nhập không thành công. Email hoặc mật khẩu không đúng.");
    }
}

function main() {
    let choice;
    do {
        choice = +prompt(`
        Chọn chức năng:
        1. Đăng ký người dùng mới
        2. Đăng nhập
        3. Thoát
        `);

        switch (choice) {
            case 1:
                register();
                break;
            case 2:
                login();
                break;
            case 3:
                console.log("Thoát chương trình. Hẹn gặp lại!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
        }
    } while (choice !== 3);
}

main();
