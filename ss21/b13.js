
let n = +prompt("nhap n");
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
