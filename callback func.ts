type numstr = number|string;
function add(
    num1: numstr,        
    num2: numstr,
    cb: (num:numstr) => void)
{
    if(typeof(num1) === 'number' && typeof(num2) === 'number')
    {
        let ans = num1 + num2;
        return ans;
        cb(ans);
    } 
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')
    {
        let ans = num1 + num2;
        return ans;
        cb(ans);
    }
    else 
    {
        console.log("Please enter same type of data");
    }

}
console.log(add(15, 20, (result) => {
    console.log(result);
    return result;
}));
