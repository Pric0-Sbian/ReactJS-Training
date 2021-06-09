const a = [
    {name: 'first_name', alais: 'First Name', type: 'string'},
    {name: 'age', alais: 'Age', type: 'number'}
  ];
  const b = [
    {first_name: 'John', age: 23},
    {first_name: 'Tom', age: 25},
  ];
  
  //output will be:
//   const c = [
//     {First Name: 'John', Age: 23},
//     {First Name: 'Tom', Age: 25}
//   ];

const c = [];
const farr = [];
for(ob of a){
  farr.push(ob.alais);
}
console.log(farr);
for(i = 0; i< b.length; i++){
  let object = {};
  object[farr[0]] = b[i].first_name;
  object[farr[1]] = b[i].age;
  c.push(object);
}
console.log(c);
document.write(JSON.stringify(c));