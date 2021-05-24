"use strict";
var x = 5;
var y = 17;
var a = "+";
var result;
switch (a) {
    case "+":
        result = x + y;
        break;
    case "-":
        result = x - y;
        break;
    case "*":
        result = x * y;
        break;
    case "/":
        result = x / y;
        break;
}
console.log("thwe result of addition is" + result);
