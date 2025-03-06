let numberArr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i = 0; i <= 9; i++) {
    let flag = 0;
    for (let j = 0; j < numberArr.length; j++) {
        if (numberArr[j] == i) {
            flag++;
        }
    }
    if (flag > 0) {
        console.log("số " + i + "xuất hiện " + flag + "lần");
    }
    flag = 0;
}

