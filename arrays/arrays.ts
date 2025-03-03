// const arr: Array<number>=[1,2,3,4]
// const arr: number[]=[1,2,3,4]
// console.log(arr)

type User={
    id:number,
    name:string,
    age?:number
}


const nums=[1,2,3,4]

const allUsers:Array<User>=[]
function fun(data:Array<number>){
    data.forEach(num=>console.log(num))

}

function returArray():Array<string>{
    return ['a','b']
}


function addUsers(){
    allUsers.push({name:"tirugu",id:101,age:21})
    allUsers.push({name:"bharath",id:101})
    allUsers.push({name:"kumar",id:102});

}
fun(nums)
console.log(returArray())

addUsers()

console.log("All users: ",allUsers)
console.log("All users: ",allUsers[0])
console.log("All users: ",allUsers[1])
console.log("All users: ",allUsers[2])

//nested arrays
const matrix1 : number[][]=[[1,2,3],[4,5]]
const matrix2 : Array<number>[]=[[1,2,3],[4,5]]