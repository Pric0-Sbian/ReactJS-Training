// Task 1: replace alais with name
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
  var ob = {name: 'first_name', alais: 'First Name', type: 'string'};
  var ob2 = {first_name: 'John', age: 23};
  
  document.write("<br>") 
  document.write(b[0].ob);
  document.write("<br>") 
  // Task 2: replace duplicate with 0
  // const a = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
  // output will be:
  // const b = [10, 12, 2, 6, 0, 4, 3, 0, 13, 15, 0, 0, 0];
  
  // Task 3: get all Children by parentId create a dropdown of all ids, user can select id and will get all children
//   const a = [
//     {id: 1, parentId: null},
//     {id: 2, parentId: 1},
//     {id: 3, parentId: 1},
//     {id: 4, parentId: 2},
//     {id: 5, parentId: 2},
//     {id: 6, parentId: 2},
//     {id: 7, parentId: 5},
//     {id: 8, parentId: 5},
//     {id: 9, parentId: 5},
//     {id: 10, parentId: 5},
//   ]
  /*
  output will be:
  // if user select id 1
  const b = [2,3,4,5,6,7,8,9,10];
  // if user select id 5
  const b = [7,8,9,10];
  */