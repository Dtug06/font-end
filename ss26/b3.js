let arrayEmail = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com", "tuan20062012@gmail.com", "tuangmail.com"];

function checkEmail(arr) {
    const result = arr.filter(str => str.includes("@") && !str.includes(" "));
    return result.length > 0 ? result : "Không có phần tử nào";
}

console.log(checkEmail(arrayEmail));
