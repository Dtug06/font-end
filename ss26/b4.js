function isPrime(n) {
    let flag = true;
    if (n <= 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function filterIsPrime(arr) {
    const result = arr.filter(numb => isPrime(numb));
    return result.length > 0 ? result : console.log("Mảng không có số nguyên tố");
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
console.log(filterIsPrime(array));