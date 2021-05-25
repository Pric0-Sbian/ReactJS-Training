let z;
let y;
let x = 123;
x = 123e5;

document.write(x + "<br />");
x = 123e-5;
document.write(x + "<br />");
x = 999999999999999;
document.write(x + "<br />");
x = 99999999999999999;
document.write(x + "<br />");       //integers are accurate till 15 digits
x = 0.2 + 0.1;                      //floating point arithematic is not always accurate
document.write(x + "<br />");       
x = (0.2*10 + 0.1*10)/10;           //this will give accurate result 
document.write(x + "<br />");
x = 10;
y = 20;
z = "The result is: " + x + y;      // The result is: 1020
document.write(z + "<br />");
x = 10;
y = 20;
z = "30";
let result = x + y + z;             // 3030
document.write(result + "<br />");
x = y/z;                        // NaN not a number
document.write(x + "<br />");
document.write(isNaN(x)?"its not a number":"its a number");
x = 0;
y = 4;
z = y/x         // infinity
document.write(z + "<br />");
//number as an object
x = new Number(46);
document.write(x + "<br />");