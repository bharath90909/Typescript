


//generics are primiarly for resuablilty

interface User{
    name:string,
    age:number
}

function reuseable<T>(value:T):T{
    return value;
}

function printObjectsData<T>({name,age}:T):void{
    console.log(name,age)
}


console.log(reuseable(1))
console.log(reuseable("hai"))
console.log(reuseable(true))

printObjectsData<User>({name:"barath",age:21})

//muktiple parameters

function multipleParams<T,U>(a:T,b:U):[T,U]{
    return [a,b]
}

console.log(multipleParams(1,'A'))

