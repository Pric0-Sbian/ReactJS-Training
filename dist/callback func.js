"use strict";
function add(num1, num2, cb) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        var ans = num1 + num2;
        return ans;
        cb(ans);
    }
    else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        var ans = num1 + num2;
        return ans;
        cb(ans);
    }
    else {
        console.log("Please enter same type of data");
    }
}
console.log(add(15, 20, function (result) {
    console.log(result);
    return result;
}));
console.log("hey guyssssssss");
