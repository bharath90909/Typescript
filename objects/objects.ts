
// type aliasName={
//     name:string,
//     isPaid:boolean
// }

// type optionalkeys={
//     name:string,
//     price:number,
//     version?:string
// }

// function createUser({name,isPaid} : aliasName){
//     console.log(name +" "+isPaid)
// }

// //or

// // function createUser(user: aliasName){
// //     console.log(user.name +" "+user.isPaid)
// // }

// createUser({name:"Bharath",isPaid:true})

// const createCourse=():optionalkeys=>{
//     // return { name:"Realme",price:100,version:"12"}
//     return { name:"Realme",price:100}
// }

// console.log(createCourse)

type obj={
    name:string,
    age:number,
    hasVoterID:boolean
}

const person={
    name:"Bharath",
    age:22,
    hasVoterID:true
}
function eligibleToVote(person:obj):boolean{
    return person.hasVoterID
}
console.log(eligibleToVote(person))


