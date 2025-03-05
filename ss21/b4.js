let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let c = Number(prompt("Nhập số c: "));
if (a != 0) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta === 0) {
        console.log("Phương trình có nghiệm kép");
        let x = -b / (2 * a);
        console.log("x1 = x2 = " + x);
    } else {
        console.log("Phương trình có hai nghiệm phân biệt");
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("x1 = " + x1 + ", x2 = " + x2);
    }
} 