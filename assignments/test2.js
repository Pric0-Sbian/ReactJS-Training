// Task 2: replace duplicate with 0
  // const a = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
  // output will be:
  // const b = [10, 12, 2, 6, 0, 4, 3, 0, 13, 15, 0, 0, 0];
const c = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
function replace_same(a){
for(i = 0;i < a.length; i++){
    console.log("i");
    for(j = 0 ;j < a.length; j++){
      console.log("j");
      if(i !== j){
        if(a[i] === a[j])
        {
          c[j] = 0;
        }
      }
    }
  }
  return a;
}
document.write(replace_same(c));