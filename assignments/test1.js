const a = [
    {name: 'first_name', alais: 'First Name', type: 'string'},
    {name: 'age', alais: 'Age', type: 'number'}
  ];
  const b = [
    {first_name: 'John', age: 23},
    {first_name: 'Tom', age: 25}
  ];
  
  //output will be:
//   const c = [
//     {First Name: 'John', Age: 23},
//     {First Name: 'Tom', Age: 25}
//   ];

const c = [];

for (var i=0; i < b.length; i++) {
  let fstring = a[0].alais + ": " + b[i].first_name + ", " + a[1].alais + ": " + b[i].age;
  let sstring = fstring; 
  document.write(fstring);
  console.log(fstring);
  let tstring = sstring.replace(',','?');
  document.write(tstring);
  console.log(tstring);
  let arr = tstring.split('?');
  console.log(arr);
  document.write(arr);
  let object = {};
  arr.forEach(function(value,i) {
    let c = (i+1)/2, e = c.toString();
    console.log(e);
    if(e.indexOf('.') != -1 ) {
      //empty.value = arr[i+1];
      object[value] = arr[i+1];
    } 
  }); 
c.push(object);
      
}
console.log(c);
document.write(c);