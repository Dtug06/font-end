function numbEven(arr) {
    if (!arr.every(Number.isFinite)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            flag++;
        }
    }
    (flag > 0) ? flag : console.log("Mảnh không chứa số chẵn");
}
let arr = [1, 2, 3, "vcl", 5, 6];
console.log(numbEven(arr))