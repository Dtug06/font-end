let money = Number(prompt("nhập số tiền cần gửi: "));
let month = Number(prompt("nhập số tháng cần gửi: "));
let interest = Number(prompt("nhập số lãi xuất: "));
let oldMoney = money;
let newMoney = 0;
if (Number.isInteger(month) && month > 0 && money > 0 && interest > 0) {
    for (let i = 0; i < month; i++) {
        newMoney = money * (interest / 100);
        money += newMoney;
        newMoney = 0;
    }
    console.log(`tiền lãi: ${money - oldMoney}`);
    console.log(`tiền nhận được: ${money}`);
} else {
    console.log(`Không hợp lệ`);
}