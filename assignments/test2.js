// Task 2: replace duplicate with 0
  const a = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
  // output will be:
  // const b = [10, 12, 2, 6, 0, 4, 3, 0, 13, 15, 0, 0, 0];
function replace_same(x){
for(i = 0;i < x.length; i++){
    console.log("i");
    for(j = 0 ;j < x.length; j++){
      console.log("j");
      if(i !== j){
        if(x[i] === x[j])
        {
          x[j] = 0;
        }
      }
    }
  }
  return x;
}
const b = replace_same(a);
document.write(b);