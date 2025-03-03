


// | --> we call it as pipe

let value:string|number;
value="ABC"
value=123

///this is wrong way to define
// const arr: string[]|number[]=[1,'2']

// correct way of defining an array

const arr: (string|number)[]=[1,"2",1567]

const data : Array<(string|number)>=[1,2,3,"ANbc"];
const matrix: Array<(string|number)>[]=[[1,2,3],["ANbc"]];


for(let arr of matrix){
    for(let val of arr){
        console.log(val);
    }
}
