let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
let max = 0;
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j];
    }
}
console.log(max);