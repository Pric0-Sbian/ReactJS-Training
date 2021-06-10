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
let doc = '<button type = "button" onclick = "user_details();">Click Me</button><br><hr><i><ul id="p"></ul><i>';
document.write(doc);
const c = [];
const narr = [];
const aarr = [];
function user_details(){
  for(ob of a){
    aarr.push(ob.alais);
    narr.push(ob.name);
  }
  for(i = 0; i< b.length; i++){
    let object = {};
    for(j = 0; j < narr.length; j++){
      object[aarr[j]] = b[i][narr[j]];
    }  
    c.push(object);
  }
  console.log(c);
  const pro = document.getElementById("p");
  for(data of c){
  const noob = document.createElement("li");
  noob.innerHTML = JSON.stringify(data);
  pro.appendChild(noob);
  }
}
