function add(a: number, b: number): number {
  return a + b;
}

function defaultParams(a:number , b:number ,c:number=10):void{
  console.log(a+b+c);
}

const arrow = (num: number): boolean => {
  return num > 10?true:false
};

const anonymus = function(num: number): boolean{
  return num > 10?true:false
};

const sum = add(10, 10);
const result= add(10, 10);
console.log("Sum: ",sum);
console.log("arrow ",arrow(20));
console.log("anonymus ",anonymus(5));

const data=[1,2,3,4,5]
const tens=data.map((num :number):number=>num*10)
console.log(tens)


