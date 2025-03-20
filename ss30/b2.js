const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let books = [
  { id: 1, name: "Lập Trình C", price: 100, quantity: 10, category: "Lập trình" },
  {
    id: 2,
    name: "JavaScript Nâng Cao",
    price: 150,
    quantity: 8,
    category: "Lập trình",
  },
  { id: 3, name: "Sách Kinh Tế", price: 200, quantity: 5, category: "Kinh tế" },
];

let cart = [];

/* 1. Hiển thị danh sách sách theo thể loại */
function displayBooksByCategory(callback) {
  rl.question("Nhập tên thể loại: ", (category) => {
    const filteredBooks = books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
    if (filteredBooks.length === 0) {
      console.log("Không có sách nào thuộc thể loại này.");
    } else {
      console.log(`Danh sách sách thuộc thể loại "${category}":`);
      filteredBooks.forEach((book) => console.log(book));
    }
    callback();
  });
}

/* 2. Thêm sách mới vào kho */
function addNewBook(callback) {
  rl.question("Nhập mã sách (number): ", (idInput) => {
    const id = parseInt(idInput);
    if (isNaN(id)) {
      console.log("Mã sách phải là số!");
      return callback();
    }
    rl.question("Nhập tên sách: ", (name) => {
      rl.question("Nhập giá sách (number): ", (priceInput) => {
        const price = parseFloat(priceInput);
        if (isNaN(price)) {
          console.log("Giá sách phải là số!");
          return callback();
        }
        rl.question("Nhập số lượng sách: ", (quantityInput) => {
          const quantity = parseInt(quantityInput);
          if (isNaN(quantity)) {
            console.log("Số lượng phải là số!");
            return callback();
          }
          rl.question("Nhập thể loại sách: ", (category) => {
            let newBook = { id, name, price, quantity, category };
            books.push(newBook);
            console.log("Thêm sách mới thành công!");
            callback();
          });
        });
      });
    });
  });
}

/* 3. Tìm kiếm sách theo tên hoặc id */
function searchBook(callback) {
  rl.question("Nhập tên sách hoặc mã sách cần tìm: ", (keyword) => {
    let result = [];
    if (!isNaN(parseInt(keyword))) {
      const id = parseInt(keyword);
      result = books.filter((book) => book.id === id);
    } else {
      result = books.filter((book) =>
        book.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    if (result.length === 0) {
      console.log("Không tìm thấy sách.");
    } else {
      console.log("Kết quả tìm kiếm:");
      result.forEach((book) => console.log(book));
    }
    callback();
  });
}

/* 4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho) */
function buyBook(callback) {
  rl.question("Nhập mã sách cần mua: ", (idInput) => {
    const id = parseInt(idInput);
    if (isNaN(id)) {
      console.log("Mã sách không hợp lệ!");
      return callback();
    }
    let book = books.find((b) => b.id === id);
    if (!book) {
      console.log("Không tìm thấy sách với mã đã nhập.");
      return callback();
    }
    rl.question("Nhập số lượng cần mua: ", (quantityInput) => {
      const buyQuantity = parseInt(quantityInput);
      if (isNaN(buyQuantity) || buyQuantity <= 0) {
        console.log("Số lượng không hợp lệ!");
        return callback();
      }
      if (buyQuantity > book.quantity) {
        console.log("Số lượng trong kho không đủ!");
        return callback();
      }
      // Cập nhật số lượng sách trong kho
      book.quantity -= buyQuantity;
      // Cập nhật giỏ hàng (nếu sách đã có trong giỏ thì cộng thêm số lượng)
      let cartItem = cart.find((item) => item.id === book.id);
      if (cartItem) {
        cartItem.quantity += buyQuantity;
      } else {
        cart.push({
          id: book.id,
          name: book.name,
          price: book.price,
          quantity: buyQuantity,
        });
      }
      console.log("Mua sách thành công!");
      callback();
    });
  });
}

/* 5. Sắp xếp sách theo giá tăng dần */
function sortBooksByPriceAsc(callback) {
  const sortedBooks = [...books].sort((a, b) => a.price - b.price);
  console.log("Danh sách sách theo giá tăng dần:");
  sortedBooks.forEach((book) => console.log(book));
  callback();
}

/* 6. Sắp xếp sách theo giá giảm dần */
function sortBooksByPriceDesc(callback) {
  const sortedBooks = [...books].sort((a, b) => b.price - a.price);
  console.log("Danh sách sách theo giá giảm dần:");
  sortedBooks.forEach((book) => console.log(book));
  callback();
}

/* 7. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng */
function showCartSummary(callback) {
  let totalBooksPurchased = 0;
  let totalMoney = 0;
  cart.forEach((item) => {
    totalBooksPurchased += item.quantity;
    totalMoney += item.quantity * item.price;
  });
  console.log(`Tổng số sách đã mua: ${totalBooksPurchased}`);
  console.log(`Tổng tiền trong giỏ hàng: ${totalMoney}`);
  callback();
}

/* 8. Hiển thị tổng số lượng sách trong kho */
function showTotalBooksInInventory(callback) {
  let totalInventory = books.reduce((sum, book) => sum + book.quantity, 0);
  console.log(`Tổng số sách trong kho: ${totalInventory}`);
  callback();
}

/* Hiển thị menu và xử lý lựa chọn */
function showMenu() {
  console.log("\n========== CHƯƠNG TRÌNH QUẢN LÝ SÁCH ==========");
  console.log("1. Hiển thị danh sách sách theo thể loại");
  console.log("2. Thêm sách mới vào kho");
  console.log("3. Tìm kiếm sách theo tên hoặc id");
  console.log("4. Mua sách (Cập nhật kho)");
  console.log("5. Sắp xếp sách theo giá tăng dần");
  console.log("6. Sắp xếp sách theo giá giảm dần");
  console.log("7. Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng");
  console.log("8. Hiển thị tổng số lượng sách trong kho");
  console.log("9. Thoát chương trình");
}

function main() {
  showMenu();
  rl.question("Chọn chức năng (1-9): ", (choice) => {
    switch (choice) {
      case "1":
        displayBooksByCategory(main);
        break;
      case "2":
        addNewBook(main);
        break;
      case "3":
        searchBook(main);
        break;
      case "4":
        buyBook(main);
        break;
      case "5":
        sortBooksByPriceAsc(main);
        break;
      case "6":
        sortBooksByPriceDesc(main);
        break;
      case "7":
        showCartSummary(main);
        break;
      case "8":
        showTotalBooksInInventory(main);
        break;
      case "9":
        console.log("Cảm ơn bạn đã sử dụng chương trình quản lý sách.");
        rl.close();
        break;
      default:
        console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        main();
        break;
    }
  });
}

main();
