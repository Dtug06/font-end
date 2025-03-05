let numb = +prompt("Nhập số lượng N số nguyên tố:");
let count = 0;
let i = 2;

while (count < numb) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
        count++;
    }

    i++;
}
