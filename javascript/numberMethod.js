document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Number Methods";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#e3e6e5";
let num = 67;
console.log(num.toString());
num = 65.765
console.log(num.toExponential(1));
console.log(num.toFixed(2));
console.log(num.toPrecision(4));
console.log(((76 + 654)/10).valueOf());
num = "10";
console.log(Number(num));
console.log(Number(new Date()));
console.log(new Date());
num = 65.765;
console.log(parseInt(num));
num = 12;
console.log(parseFloat(num));


