document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Math Methods";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";
let x = -43.76;
document.write(Math.round(x) + "<br>")	// Returns x rounded to its nearest integer
document.write(Math.ceil(x) + "<br>")  // Returns x rounded up to its nearest integer
document.write(Math.floor(x) + "<br>")	// Returns x rounded down to its nearest integer
document.write(Math.trunc(x) + "<br>")	// Returns the integer part of x (new in ES6)
document.write(Math.sign(x) + "<br>"); //returns if x is negative, null or positive
document.write(Math.pow(9,4) + "<br>");
document.write(Math.sqrt(45) + "<br>");                            //returns the square root of x
document.write(Math.abs(-6.65) + "<br>");
