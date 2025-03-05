
let width = "";
let bodywidth = ".";
let long = +prompt("Nhập độ dài hình chữ nhật (tính theo 1 dấu chấm)");
let short = +prompt("Nhập chiều rộng hình chữ nhật (tính theo 1 dấu chấm)");

for (let i = 0; i < long; i++) {
    width += ".";
}
for (let j = 0; j < long - 2; j++) {
    bodywidth += " ";
}
bodywidth += ".";
document.write(width + "<br>");
for (let i = 0; i < short - 2; i++) {
    document.write(bodywidth + "<br>");
}
document.write(width + "<br>");
