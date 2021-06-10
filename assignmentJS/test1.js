const a = [
    {name: 'first_name', alais: 'First Name', type: 'string'},
    {name: 'age', alais: 'Age', type: 'number'},
    {name: 'gender', alais: 'Gender', type: 'string'},
    {name: 'city', alais: 'City', type: 'string'}
    
  ];
  const b = [
    {first_name: 'John', age: 23, gender: 'Male', city: 'delhi'},
    {first_name: 'Tom', age: 25, gender: 'Male', city: 'faribad'},
    {first_name: 'jerry', age: 20, gender: 'Male', city: 'faribad'}
  ];
  
  //output will be:
//   const c = [
//     {First Name: 'John', Age: 23},
//     {First Name: 'Tom', Age: 25}
//   ];

const c = [];
const narr = [];
const aarr = [];
for(ob of a){
  aarr.push(ob.alais);
  narr.push(ob.name);
}
//console.log(aarr);
for(i = 0; i< b.length; i++){
  let object = {};
  for(j = 0; j < narr.length; j++){
  object[aarr[j]] = b[i][narr[j]];
  }
  console.log(object);  
  c.push(object);
}
console.log(c);
document.write(JSON.stringify(c));
