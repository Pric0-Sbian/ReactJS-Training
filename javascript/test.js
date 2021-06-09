// Task 1: replace alais with name
// const a = [
//     {name: 'first_name', alais: 'First Name', type: 'string'},
//     {name: 'age', alais: 'Age', type: 'number'}
//   ];
//   const b = [
//     {first_name: 'John', age: 23},
//     {first_name: 'Tom', age: 25}
// ];
// start test 2 
// const c = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
// function replace_same(a){
// for(i = 0;i < a.length; i++){
//     console.log("i");
//     for(j = 0 ;j < a.length; j++){
//       console.log("j");
//       if(i !== j){
//         if(a[i] === a[j])
//         {
//           c[j] = 0;
//         }
//       }
//     }
//   }
//   return a;
// }
// document.write(replace_same(c));
//end of test 2
// start Test 3
const d = [
      {id: 1, parentId: null},
      {id: 2, parentId: 1},
      {id: 3, parentId: 1},
      {id: 4, parentId: 2},
      {id: 5, parentId: 2},
      {id: 6, parentId: 2},
      {id: 7, parentId: 5},
      {id: 8, parentId: 5},
      {id: 9, parentId: 5},
      {id: 10, parentId: 5},
    ];
    
    function get_by_id(x,i_d){
      let ids = [i_d];
      let children = [];
      for(data of x){
        if(data.parentId === i_d){
          ids.push(data.id);
        }
      }
      for(var id of ids){
        for(var datax of x){
          if(datax.parentId === id){
            children.push(datax.id);
          }
        }
      }
      return children;
    }
    console.log("next");
    console.log(get_by_id(d,2));
    document.write(get_by_id(d,1));
    //console.log(children);
//function get_by_id(x, id){
  
//}  
// let name = [];
// let alais = [];
// function splits_a(a){
//     for(i = 0; i < a.length; i++){
//         name[i] = a[i].name;
//         alais[i] = a[i].alais; 
//     }
//     let comb = [name, alais];
//     return comb;
// }
// function splits_b(b){
//     for(i = 0; i < b.length; i++){
//         first_name[i] = b[i].splits_a(a)[0,1];
//         age[i] = b[i].split_a(a)[0,1]; 
//     }
//     let comb = [name, alais];
//     return comb;
// }
// function name(a){
//     return a[0].name;
// }
// function alais(a){
//     return a[0].alias;
// }
// function(b){
//     return b[0];
// }
// function result()
// {
// const c = [
//     {alais(a): }
// ];
// }
/*
output will be:
const c = [
  {First Name: 'John', Age: 23},
  {First Name: 'Tom', Age: 25}
]
*/
//   function combine_array(a, b){
//       const obj_prop_name = a[0].alais;
//       const obj_prop_name_value = b[0].a[0].name;
//       const obj_prop_age = a[1].alais;
//       const obj_prop_age_value = b[0].a[1].name;
//       const c = [
//           {obj_prop_name : obj_prop_name_value, obj_prop_age : obj_prop_age_value},
//       ]
//         //   const c = [
//         //     {a[i].alias: b[i].a[i].name,
//         //     a[i++].alias: b[i++].a[i++].name}
//         //   ];
//         return c;
//   }
//   document.write(combine_array(a, b));
  
  // Task 2: replace duplicate with 0
  //const a = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
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

// const a = [
//   {name: 'first_name', alais: 'First Name', type: 'string'},
//   {name: 'age', alais: 'Age', type: 'number'}
// ];

// const b = [
//   {first_name: 'John', age: 23},
//   {first_name: 'Tom', age: 25}
// ];

// const c = []; 

// for (let i=0;i<b.length;i++) {
//   d = a[0].alais + ": " + b[i].first_name + ", " + a[1].alais + ": " + b[i].age;
//   document.getElementById(i+1).innerHTML = d;
//   
//   c.push(r)
// }
// console.log(c);
*/
