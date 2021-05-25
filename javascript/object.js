let person = {
    firstName: 'Prashant',
    lastName: 'Joshi',
    age: 8475,
    no: 796900,
    fullname: function(){
        return this.firstName + ' ' + this.lastName;
    },
    detail: function(){
        return "My Name is " + this.firstName + ' ' + this.lastName + ". My age is " + this.age + " and my contact no. is " + this.no;
    } 
}
console.log(person.fullname());
console.log(person.detail());
