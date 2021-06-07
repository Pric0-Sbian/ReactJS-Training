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
  console.log(get_by_id(d,2));
  document.write(get_by_id(d,1));