// | --> we call it as pipe
var value;
value = "ABC";
value = 123;
///this is wrong way to define
// const arr: string[]|number[]=[1,'2']
// correct way of defining an array
var arr = [1, "2", 1567];
var data = [1, 2, 3, "ANbc"];
var matrix = [[1, 2, 3], ["ANbc"]];
for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
    var arr_2 = matrix_1[_i];
    for (var _a = 0, arr_1 = arr_2; _a < arr_1.length; _a++) {
        var val = arr_1[_a];
        console.log(val);
    }
}
