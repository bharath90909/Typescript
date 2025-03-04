//generics are primiarly for resuablilty
function reuseable(value) {
    return value;
}
function printObjectsData(_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
}
console.log(reuseable(1));
console.log(reuseable("hai"));
console.log(reuseable(true));
console.log(reuseable("this is string"));
printObjectsData({ name: "barath", age: 21 });
//muktiple parameters
function multipleParams(a, b) {
    return [a, b];
}
console.log(multipleParams(1, 'A'));
