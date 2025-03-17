let contacts = [];

function addContact() {
    const newContact = {};

    // Nhập ID và kiểm tra trùng lặp
    newContact.id = +prompt("Nhập ID:");
    while (contacts.some(contact => contact.id === newContact.id)) {
        alert("ID đã tồn tại. Vui lòng nhập ID khác!");
        newContact.id = +prompt("Nhập ID:");
    }

    // Nhập thông tin liên hệ
    newContact.name = prompt("Nhập Tên:");
    newContact.email = prompt("Nhập Email:");
    newContact.phone = prompt("Nhập Số Điện Thoại:");
    contacts.push(newContact);
    console.log("Thêm liên hệ thành công!");
}

function displayContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.log("Danh sách danh bạ:");
        contacts.forEach(contact => {
            console.log(`ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
        });
    }
}

function searchContact() {
    const numberPhone = prompt("Nhập số điện thoại:");
    const foundContact = contacts.find(contact => contact.phone === numberPhone);

    if (foundContact) {
        console.log("Thông tin khách hàng tìm thấy:");
        console.log(`ID: ${foundContact.id}`);
        console.log(`Tên: ${foundContact.name}`);
        console.log(`Email: ${foundContact.email}`);
        console.log(`SĐT: ${foundContact.phone}`);
    } else {
        console.log("Không tìm thấy khách hàng có số điện thoại này.");
    }
}

function updateContact() {
    const idToUpdate = +prompt("Nhập ID để cập nhật:");
    const foundContact = contacts.find(contact => contact.id === idToUpdate);

    if (foundContact) {
        // Cập nhật thông tin, giữ nguyên nếu người dùng không nhập mới
        foundContact.name = prompt("Nhập Tên mới:") || foundContact.name;
        foundContact.email = prompt("Nhập Email mới:") || foundContact.email;
        foundContact.phone = prompt("Nhập Số Điện Thoại mới:") || foundContact.phone;
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy khách hàng với ID này.");
    }
}

function deleteContact() {
    const idToDelete = +prompt("Nhập ID để xóa:");
    const index = contacts.findIndex(contact => contact.id === idToDelete);

    if (index !== -1) {
        contacts.splice(index, 1); // Xóa phần tử tại vị trí index
        console.log("Liên hệ đã được xóa thành công!");
    } else {
        console.log("Không tìm thấy khách hàng với ID này.");
    }
}


let choice;
do {
    choice = +prompt(`
        Chọn chức năng:
        1. Thêm liên hệ
        2. Hiển thị danh sách
        3. Tìm kiếm theo số điện thoại
        4. Cập nhật liên hệ
        5. Xóa liên hệ
        6. Thoát
        `);

    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            searchContact();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình. Hẹn gặp lại!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
    }
} while (choice !== 6);


