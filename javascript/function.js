print(a)                // function to print any thing in the page
{
    Document.write(a);
}
loop(x, comp)           // function which inceases its value until its greater or equal to a given parameter
{
    x += x;
    // if(x >= comp)
    // {
    //     return x;
    // }
    // else
    // {
    //     loop(x,comp);
    // }
}
about_func(func_name)       // gives the function name and code inside its body
{
    document.write("<p>" + func_name + "</p>");
}

add(arr)
{
    var sum = 0;
    for(var data of arr)
    {
        sum += data;
    }
    return sum;
}
print("hello world");
document.write(loop(2,50));
about_func(loop);
add([1,2,3,4,5]);

