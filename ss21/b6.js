let numb = Number(prompt("Nhập số: "));
let str = "";
if (!Number.isInteger(numb) || numb == 0) {
    console.log(`Không hợp lệ`);
} else {
    if (numb > 0) {
        for (let i = 1; i <= numb; i++) {
            if (numb % i == 0) {
                str += i + ",";
            }
        }
        console.log(str.slice(0, -1));
    } else {
        for (let i = numb; i <= Math.abs(numb); i++) {
            if (numb % i == 0) {
                str += i + ",";
            }
        }
        console.log(str.slice(0, -1));
    }
}