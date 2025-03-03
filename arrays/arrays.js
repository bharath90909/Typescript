// const arr: Array<number>=[1,2,3,4]
// const arr: number[]=[1,2,3,4]
// console.log(arr)
var nums = [1, 2, 3, 4];
var allUsers = [];
function fun(data) {
    data.forEach(function (num) { return console.log(num); });
}
function returArray() {
    return ['a', 'b'];
}
function addUsers() {
    allUsers.push({ name: "tirugu", id: 101, age: 21 });
    allUsers.push({ name: "bharath", id: 101 });
    allUsers.push({ name: "kumar", id: 102 });
}
fun(nums);
console.log(returArray());
addUsers();
console.log("All users: ", allUsers);
console.log("All users: ", allUsers[0]);
console.log("All users: ", allUsers[1]);
console.log("All users: ", allUsers[2]);
