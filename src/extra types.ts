// unknown and never are two more types
let myname: unknown;
myname = "Prashant Joshi";
myname = 37;
myname = true; // because the type is unknown we can put any type in this variable
// but there is a difference between any and unknown type
//if we do this in unknown type it will give an error
// let str : string;
// str = myname; 
// this gives an error because the type is unknown but if we switch this to type form unknown to any the error goes away
let anothername: any;
let str: string;
str = anothername;
// this does not give any error.
//there is also a type called never which when given to function will restrict the function from returning value
//and if we try to return a value in a function with type never its give a error unlike void which does not.
