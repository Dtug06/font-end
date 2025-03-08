const mixedArray = [true, false, 0, 1, "", "Hello", null, undefined, NaN, {}, [], -1, 42, "0", "false", "true", Infinity, -Infinity, " ", "JavaScript"];
console.log(mixedArray);
for (let i = 0; i < mixedArray.length; i++) {
    if (mixedArray[i] == false) {
        mixedArray.splice(i, 1);
    }
}
console.log(mixedArray);