type numstr = number|string;
function add(
    num1: numstr,        //here in place of  writing number|string we can write type alias
    num2: numstr)
{
    if(typeof(num1) === 'number' && typeof(num2) === 'number')
    {
        let ans = num1 + num2;
        return ans;
    } 
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')
    {
        let ans = num1 + num2;
        return ans;
    }
    else 
    {
        console.log("Please enter same type of data");
    }

}
function result(res:numstr)             // the return type is void here because this function is not returning anything
{
    console.log("result is" + res);
}
console.log(result(add(15,67)));        //this gives a undifened type in console
// if the we give function return value undefined its gives an error 
// function result(res:numstr):undefined             
// {
//     console.log("result is" + res);
// }
//but if we give void it does not give an error
//although if we write a return statement in the function it does not give error when we give return type as undefined
// we can also reffer a function to an variable like this
let addref = add;
//but here we should always give the type as function to the variable like this so that there is no chance of getting a run time error
let addreff : Function;
addreff = add;
// like this type can be sure that function will be reffered to this variable
// we can be more precise in function type like this
let addrefference:(a:numstr, b:numstr) => numstr;
addrefference = add;
//like this typesript knows exactly what type of values the parameters take and what type the function returns

    
console.log(addrefference(56,45));
