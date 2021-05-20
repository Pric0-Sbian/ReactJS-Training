enum Role {ADMIN, AUTHOR, READ_ONLY};
// THIS IS A ENUM 
console.log(Role.ADMIN);
console.log(Role.AUTHOR);
console.log(Role.READ_ONLY);
// values assigned to them are like 0, 1, 2, 3,...
const person = {
    name : "Prashant Joshi",
    age : 0.0055,
    hobbies : ['Music','games'],
    role : Role.ADMIN                    
};
if(person.role === Role.ADMIN)
{
    console.log('It is Admin');
}
else if(person.role === Role.AUTHOR)
{
    console.log("It is Author");
} 
else if(person.role === Role.READ_ONLY)
{
    console.log("You can't Write the file");
}
else
{
    console.log("Unknown entry");
}
//we can also do this with enum
enum Access {OWNER = 4,GROUP = 67,WORLD = 3587}
console.log(Access);
// we can userb string instead of numbers too.