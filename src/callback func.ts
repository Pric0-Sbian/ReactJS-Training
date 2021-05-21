type numstr = number | string;
function add(
  num1: numstr,
  num2: numstr,
  cb: (num: numstr) => void) {
  if (typeof (num1) === 'number' && typeof (num2) === 'number') {
    let ans = num1 + num2;
    cb(ans);
    return ans;

  }
  else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
    let ans = num1 + num2;
    cb(ans);
    return ans;

  }
  else {
    console.log("Please enter same type of data");
  }

}
add(15, 20, (result) => {
  console.log(result);
  //return result;
});
console.log("hey guyssssssss");
