// let products = [];
// function addProduct() {
//     const newProduct = {};
//     newProduct.id = +prompt("Nhập id sản phẩm");
//     while (products.some(product => product.id === newProduct.id)) {
//         console.log("Id bị trùng ,vui lòng nhập lại!");
//         newProduct.id = +prompt("Nhập id sản phẩm");
//     }
//     newProduct.name = prompt("Nhập sản phẩm");
//     newProduct.price = prompt("Nhâp giá giản phẩm");
//     newProduct.category = prompt("Nhập danh mục sản phẩm");
//     newProduct.quantity = prompt("Số lượng sản phẩm");
//     products.push(newProduct);
// }

// function displayProduct() {
//     console.log(products);
// }
// function searchProduct() {
//     let id = +prompt("Nhập id để tìm kiếm");
//     let resuilt = products.find(product => product.id === id);
//     if (id > 0) {
//         console.log("Thông tin khách hàng tìm thấy:");
//         console.log(`ID: ${resuilt.id}`);
//         console.log(`Tên: ${resuilt.name}`);
//         console.log(`Giá: ${resuilt.price}`);
//         console.log(`Phân loại : ${resuilt.category}`);
//         console.log(`Số lượng : ${resuilt.quantity}`);
//     }
// }
// function updateProduct() {
//     let id = +prompt("Nhập id để tìm kiếm");
//     let resuilt = products.find(product => product.id === id);
//     resuilt.name = prompt("Nhâp tên sản phẩm");
//     resuilt.price = prompt("Nhập giá");
//     resuilt.category = prompt("Nhập phân loại");
//     resuilt.quantity = prompt("Số lượng");

// }

// function deleteProduct() {
//     const idToDelete = +prompt("Nhập ID để xóa:");
//     const index = products.findIndex(product => product.id === idToDelete);

//     if (index !== -1) {
//         products.splice(index, 1); // Xóa phần tử tại vị trí index
//         console.log("Sản phẩm đã được xóa thành công!");
//     } else {
//         console.log("Không tìm thấy sản phẩm với ID này.");
//     }
// }
// function filterProduct() {
//     let id = +prompt("Giá");
//     for (let i = 0; i < products.length; i++) {
//         if (products[i] == id) {
//             console.log(`ID: ${products[i].id}`);
//             console.log(`Tên: ${products[i].name}`);
//             console.log(`Giá: ${products[i].price}`);
//             console.log(`Phân loại : ${products[i].category}`);
//             console.log(`Số lượng : ${products[i].quantity}`);
//         }
//     }
// }
// let choice;
// do {
//     choice = +prompt(`
//         1 Thêm sản phẩm vào danh sách sản phẩm.
//         2 Hiển thị tất cả sản phẩm.
//         3 Hiển thị chi tiết sản phẩm theo id.
//         4 Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
//         5 Xóa sản phẩm theo id.
//         6 Lọc sản phẩm theo khoảng giá.
//         7 Thoát.
//         `);

//     switch (choice) {
//         case 1://Thêm sản phẩm vào danh sách sản phẩm.
//             addProduct();
//             break;
//         case 2://Hiển thị tất cả sản phẩm.
//             displayProduct();
//             break;
//         case 3://Hiển thị chi tiết sản phẩm theo id.
//             searchProduct();
//             break;
//         case 4://Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
//             updateProduct();
//             break;
//         case 5://Xóa sản phẩm theo id.
//             deleteProduct();
//             break;
//         case 6://Lọc sản phẩm theo khoảng giá.
//             filterProduct();
//             break;
//         default:
//             console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
//     }
// } while (choice !== 7);

let products = [];

function addProduct() {
    const newProduct = {};
    newProduct.id = +prompt("Nhập id sản phẩm");
    while (products.some(product => product.id === newProduct.id)) {
        console.log("Id bị trùng, vui lòng nhập lại!");
        newProduct.id = +prompt("Nhập id sản phẩm");
    }
    newProduct.name = prompt("Nhập sản phẩm");
    newProduct.price = +prompt("Nhập giá sản phẩm");
    newProduct.category = prompt("Nhập danh mục sản phẩm");
    newProduct.quantity = +prompt("Số lượng sản phẩm");

    products.push(newProduct);
    console.log("Thêm sản phẩm thành công!");
}

function displayProduct() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
    } else {
        console.log("Danh sách sản phẩm:");
        products.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Loại: ${product.category}, Số lượng: ${product.quantity}`);
        });
    }
}

function searchProduct() {
    let id = +prompt("Nhập ID để tìm kiếm");
    const result = products.find(product => product.id === id);

    if (result) {
        console.log("Thông tin sản phẩm tìm thấy:");
        console.log(`ID: ${result.id}, Tên: ${result.name}, Giá: ${result.price}, Loại: ${result.category}, Số lượng: ${result.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function updateProduct() {
    let id = +prompt("Nhập ID để cập nhật:");
    const result = products.find(product => product.id === id);

    if (result) {
        result.name = prompt("Nhập tên sản phẩm mới:") || result.name;
        result.price = +prompt("Nhập giá mới:") || result.price;
        result.category = prompt("Nhập danh mục mới:") || result.category;
        result.quantity = +prompt("Nhập số lượng mới:") || result.quantity;
        console.log("Cập nhật sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function deleteProduct() {
    const idToDelete = +prompt("Nhập ID để xóa:");
    const index = products.findIndex(product => product.id === idToDelete);

    if (index !== -1) {
        products.splice(index, 1);
        console.log("Sản phẩm đã được xóa thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID này.");
    }
}

function filterProduct() {
    const minPrice = +prompt("Nhập giá tối thiểu:");
    const maxPrice = +prompt("Nhập giá tối đa:");

    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (filteredProducts.length > 0) {
        console.log("Danh sách sản phẩm trong khoảng giá:");
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Loại: ${product.category}, Số lượng: ${product.quantity}`);
        });
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    }
}

let choice;
do {
    choice = +prompt(`
        1 Thêm sản phẩm vào danh sách sản phẩm.
        2 Hiển thị tất cả sản phẩm.
        3 Hiển thị chi tiết sản phẩm theo id.
        4 Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5 Xóa sản phẩm theo id.
        6 Lọc sản phẩm theo khoảng giá.
        7 Thoát.
        `);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProduct();
            break;
        case 3:
            searchProduct();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProduct();
            break;
        case 7:
            console.log("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
    }
} while (choice !== 7);
