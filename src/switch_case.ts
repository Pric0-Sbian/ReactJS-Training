export {};
const x = 5;
const y = 17;
let a = "+";
let result:number;

switch (a)
{
    case "+":
        result = x+y;
        break;
    case "-":
        result = x-y;
        break;
    case "*":
        result = x*y;
        break;
    case "/":
        result = x/y;
        break;    
}
//@ts-ignore
console.log("thwe result of addition is" + result); 

