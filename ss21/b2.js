let evenNumb = 0;
let oddNumb = 0;
for (let i = 0; i < 5; i++) {
    let numb = Number(prompt("Nhập số: "));
    if (numb % 2 != 0) {
        oddNumb += 1;
    } else {
        evenNumb += 1;
    }
}
console.log(`Có ${evenNumb} số chẵn, ${oddNumb} số lẻ`);