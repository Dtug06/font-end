
do {
    let choice = +prompt(`
        1 Đăng ký người dùng mới
        2 Đăng nhập người dùng
        `);
    switch (choice) {
        case 1://Đăng ký người dùng mới
            break;
        case 2: //đăng nhập tài khoản
            break;
        case 3: //thoát trương trình
            break;
        default://Other choice
            console.log("Lueaj chọn không hợp lệ");
    }
} while (choice != 3)
