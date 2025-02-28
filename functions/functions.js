function add(a, b) {
    return a + b;
}
function defaultParams(a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b + c);
}
var arrow = function (num) {
    return num > 10 ? true : false;
};
var anonymus = function (num) {
    return num > 10 ? true : false;
};
var sum = add(10, 10);
var result = add(10, 10);
console.log("Sum: ", sum);
console.log("arrow ", arrow(20));
console.log("anonymus ", anonymus(5));
var data = [1, 2, 3, 4, 5];
var tens = data.map(function (num) { return num * 10; });
console.log(tens);
