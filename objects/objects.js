// type aliasName={
//     name:string,
//     isPaid:boolean
// }
var person = {
    name: "Bharath",
    age: 22,
    hasVoterID: true
};
function eligibleToVote(person) {
    return person.hasVoterID;
}
console.log(eligibleToVote(person));
