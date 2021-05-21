//union is combination of two or more types.
type numstr = number|string;            // this is a type alias of number and string
function add(
    num1: numstr,        //here in place of  writing number|string we can write type alias
    num2: numstr)
{
    if(typeof(num1) === 'number' && typeof(num2) === 'number')
    {
        let ans = num1 + num2;
        console.log("addition of two number is: " + ans);
    } 
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')
    {
        console.log("concatenated string is: " + num1 + num2);
    }
    else 
    {
        console.log("Please enter same type of data");
    }

}
add(5,16);
add("Prashant", "Joshi");
// there are also literal type which are assigned to constants.
//there are also type alias which are like this
// type numstr = number|string which we can use in place of unions   
