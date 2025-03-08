let mixedArray = ['a', '1', 'b', '2', 'c', '3', 'd', '4', 'e', '5', 'f', '6'];
let count = 0;
console.log(mixedArray);
for (let i = 0; i < mixedArray.length; i++) {
    let temp = mixedArray[i] - 0;
    if (Number.isInteger(temp)) {
        console.log(mixedArray[i]);
        count++;
    }
}
if (count <= 0) {
    console.log("Không có ký tự số");
}




































