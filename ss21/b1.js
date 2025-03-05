let sum = 0;
for (let i = 0; i < 5; i++) {
    let numb = Number(prompt("Nhập số: "));
    if (numb % 2 != 0) {
        sum += numb;
    }
} console.log(sum);