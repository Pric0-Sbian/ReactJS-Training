function print(a)                // function to print any thing in the page
{
    document.write(a);
}
function loop(x, comp)           // function which inceases its value until its greater or equal to a given parameter
{
    x += x;
    if(x >= comp)   {
        return x;
    }
    else
    {
        loop(x,comp);
    }

}
function about_func(func_name)       // gives the function name and code inside its body
{
    document.write("<p>" + func_name + "</p>");
}

function add(arr)
{
    let sum = 0;
    for(let data of arr)
    {
        sum += data;
    }
    return sum;
}
print("hello world\t");
document.write(loop(2,50));
about_func(loop);
document.write(add([1,2,3,4,5]));

