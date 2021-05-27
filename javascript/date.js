document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Date Objects";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";
let date = new Date();
console.log(date);
console.log(date);
console.log(date);
//date can create a date with specified date and time
//can take 7 values date(year, month,day, hour,minute, second, millisecond) in order
// and minimum can take 2 values year,month
// two digits year are considered as 19** 
date = new Date("july 1, 1998 12:00:00");
console.log(date);
date = new Date(milliseconds);
console.log(date);
date = new Date();
console.log(date.toUTCString());        //converts date to standard way of displaying date
console.log(date.toDateString());       //convert date to more readable form
console.log(date.toISOString());        // converts date using iso standard format




