// Task 3: get all Children by parentId create a dropdown of all ids, user can select id and will get all children
  const a = [
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
  ]
  /*
  output will be:
  // if user select id 1
  const b = [2,3,4,5,6,7,8,9,10];
  // if user select id 5
  const b = [7,8,9,10];
  */
  let doc = '<h3><i>'+'Select the Id whose Children you want to see'+'</i></h3>'+'<select name="ids" id="select"><option selected disabled>Select Id</option>';
  for(object of a){
    doc += '<option value="'+ object.id +'">'+ object.id +'</option>';
  }
  doc += '</select><button type = "button" onclick="get_by_id();">Get Children</button><i><p id = "p"></p></i>';
  document.write(doc);
  function get_by_id(){
    i_d = document.getElementById("select").value; 
    let ids = [i_d];
    let children = [];
    for(let data of a){
      for(let i of ids){
        if(data.parentId == i){
          ids.push(data.id);
        }
      }
    }
    for(let id of ids){
      for(let datax of a){
        if(datax.parentId == id){
          children.push(datax.id);
        }
      }
    }
    console.log(children);
    childString = "Here is the list of Children of: " + i_d + "<br>" + "CHILDS<br>";
    for(child of children){
        childString += child + "<br>"; 
    }
    document.getElementById("p").innerHTML = childString;
 }