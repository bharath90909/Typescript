

interface obj1{
    name:string,
    age:number,
}

interface obj2 extends obj1{
    email:string
}

const user:obj2={
    name:"bharath",
    age:22,
    email:"abc@mail.com"
}

console.log(user)
