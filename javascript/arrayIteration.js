document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Array Iteration";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";
let arr = [67,3,54,23,65,87,12,09];
let temp = "";
arr.forEach(myFunction);                        // foreach loop iteration it actually gives 3 values (value,index,array) from which we only use value most of the time
document.write(temp);
function myFunction(value){
    temp = temp + value + "<br />";
}

for(data of arr){                       // for loop iteration 
    console.log(data);
}
arr = arr.map(myFunction2);             //map function returns a array
function myFunction2(value){
    return value*2;
}
console.log(arr);
// filetr creates new array with the elements which passes the test
arr = arr.filter(myFunction);
function myFunction(value){
    return value > 50;
}
console.log(arr);
//reduce evaluates every element of array and gives one value
let res = arr.reduce(myFunction);                                           // reduce can accept a initial value
function myFunction(total,value){                           
    return total + value;
}
//reduceRigth() same as reduce but evaluates the array right to left
//every() method check if every value in an array passes a test and return true or false according to it
//some() method check if some value in array passes the test and it takes all the three argument in the array
//indexOf and lastIndexOf searches the array for an element and returns the index
// find() returns the first element that passes the test
//findIndex return the index of the first element which passes the test



