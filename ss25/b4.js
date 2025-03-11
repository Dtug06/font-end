// let n;
// n = +prompt("Nhập một số nguyên dương bất kỳ ");
// if (n <= 0 || !Number.isInteger(n)) {
//     console.log("Dữ liệu không hợp lệ");
//     return;
// } else {
//     check(n);
// }
// function check(n) {
//     let flag = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         console.log("Là một số nguyên tố");
//     } else {
//         console.log("không phải là số nguyên tố");
//     }
// }
let n;
n = +prompt("Nhập một số nguyên dương bất kỳ: ");

if (n <= 0 || !Number.isInteger(n)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    check(n);
}

function check(n) {
    if (n === 1) {
        console.log("1 không phải là số nguyên tố");
        return;
    }

    let flag = true;
    for (let i = 2; i <= Math.sqrt(n); i++) { // Duyệt từ 2 đến căn bậc hai của n
        if (n % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(`${n} là một số nguyên tố`);
    } else {
        console.log(`${n} không phải là số nguyên tố`);
    }
}

