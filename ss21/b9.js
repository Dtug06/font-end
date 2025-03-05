let numb = Number(prompt("Nhập số nguyên: "));
let check = true;
if (!Number.isInteger(numb) || numb <= 2) {
    console.log(`Không hợp lệ`);
} else {
    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(`Đây là số nguyên tố`);
    } else {
        console.log(`Đây không phải là số nguyên tố`);
    }
}