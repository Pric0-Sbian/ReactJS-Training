"use strict";
// const person = {
//      name : "Prashant Joshi",
//      age : 0.0055,
//      hobbies : ['Music','games'],
//      role : [2,"name"]
// };
//above is a normal object with string,number,array
var person = {
    name: "Prashant Joshi",
    age: 0.0055,
    hobbies: ['Music', 'games'],
    role: [2, "name"] //Tuple 
};
//tuple is a array with fixed length and type.
person.role.push("we can not give any other value to the elements other then the specified one but this push method works if we want to add an extra element");
//person.role[0] = "this will give an error";
console.log(person);
