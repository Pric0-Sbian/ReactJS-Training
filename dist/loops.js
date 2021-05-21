"use strict";
/*
for(){}
foreach(){}
while(){}
do{}
while(){}
*/
var arr = [1, 2, 3, 4, 5, 6, 7];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var data = arr_1[_i];
    console.log(data);
}
console.log('new');
//console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("new");
var k = 0;
while (k < arr.length) {
    console.log(arr[k]);
    k++;
}
console.log("new");
var j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);
