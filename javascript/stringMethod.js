let str = 'My name is Prashant Joshi whats your name ?';
document.write(str + "<br>");
let len = str.length;
document.write(len + "<br>")
let namepos = str.indexOf('name');
document.write(namepos + "<br>");
namepos = str.indexOf('name', 8);
document.write(namepos + "<br>");
namepos = str.lastIndexOf('name');
document.write(namepos + "<br>");
namepos = str.lastIndexOf('name', 10);
document.write(namepos + "<br>");
let searchResult = str.search("Prashant Joshi");
document.write(searchResult + "<br>");
let myname = str.slice(11, 25);
document.write(myname + "<br>");
myname = str.substr(11, 14);          // substr(offset,lenght)
document.write(myname + "<br>");
let strchange = str.replace("Prashant Joshi", "not your business"); // replaces only the first match and we can also write it like this for removing case sensitive str.replace(/Prashant Joshi/i,"not your business")
document.write(strchange + "<br>");
strchange = str.replace(/name/g, "work");
document.write(strchange + "<br>");
document.write(str.toUpperCase() + "<br>");
document.write(str.toLowerCase() + "<br>");
let hello = " hello";
let world = "world ";
let hw = hello.concat(" ",world);
document.write(hw + "<br>");
hw = hw.trim();
document.write(hw + "<br>");

