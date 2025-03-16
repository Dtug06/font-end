function caculator(choice) {
    let a;
    let b;
    switch (choice) {
        case 1://cộng hai số
            a = +prompt("NHập a");
            b = +prompt("Nhập b");
            return a + b;
            break;
        case 2://trừ hai số
            a = +prompt("NHập a");
            b = +prompt("Nhập b");
            return a - b;
            break;
        case 3://Nhân hai số
            a = +prompt("NHập a");
            b = +prompt("Nhập b");
            return a * b;
            break;
        case 4://chia hai số
            a = +prompt("NHập a");
            b = +prompt("Nhập b");
            return a / b;
            break;
        case 5://Thoát
            return console.log("Thoát chương trình ");
            break;
    }
}

console.log("\n===== Menu =====");
console.log("1. Cộng hai số");
console.log("2. Trừ hai số");
console.log("3. Nhân hai số");
console.log("4. Chia hai số");
console.log("5. Thoát");
let choice = +prompt("Nhập lựa chọn");
console.log(caculator(choice));
