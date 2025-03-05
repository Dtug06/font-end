let money;
let fiveHund = 0,
    twoHund = 0,
    oneHund = 0,
    fif = 0,
    twen = 0,
    ten = 0,
    five = 0,
    two = 0,
    one = 0;
do {
    money = +prompt("Nhập số tiền muốn rút (lớn hơn 0)(chỉ truy cập đến hàng nghìn):");
} while (!Number.isInteger(money) || money <= 0);

while (money > 0) {
    if (money >= 500000) {
        money -= 500000;
        fiveHund++;
    } else if (money >= 200000) {
        money -= 200000;
        twoHund++;
    } else if (money >= 100000) {
        money -= 100000;
        oneHund++;
    } else if (money >= 50000) {
        money -= 50000;
        fif++;
    } else if (money >= 20000) {
        money -= 20000;
        twen++;
    } else if (money >= 10000) {
        money -= 10000;
        ten++;
    } else if (money >= 5000) {
        money -= 5000;
        five++;
    } else if (money >= 2000) {
        money -= 2000;
        two++;
    } else if (money >= 1000) {
        money -= 1000;
        one++;
    }
}

if (fiveHund > 0) {
    console.log(fiveHund + " tờ 500.000");
}
if (twoHund > 0) {
    console.log(twoHund + " tờ 200.000");
}
if (oneHund > 0) {
    console.log(oneHund + " tờ 100.000");
}
if (fif > 0) {
    console.log(fif + " tờ 50.000");
}
if (twen > 0) {
    console.log(twen + " tờ 20.000");
}
if (ten > 0) {
    console.log(ten + " tờ 10.000");
}
if (five > 0) {
    console.log(five + " tờ 5.000");
}
if (two > 0) {
    console.log(two + " tờ 2.000");
}
if (one > 0) {
    console.log(one + " tờ 1.000");
}
