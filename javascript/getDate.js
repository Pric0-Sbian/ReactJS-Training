document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Get Date Methods in JavaScript";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";
let date = new Date();

console.log(date.getFullYear());        //Get the year as a four digit number (yyyy)
console.log(date.getMonth());	         //Get the month as a number (0-11)
console.log(date.getDate());	        //Get the day as a number (1-31)
console.log(date.getHours());	         //Get the hour (0-23)
console.log(date.getMinutes());	         //Get the minute (0-59)
console.log(date.getSeconds());	         //Get the second (0-59)
console.log(date.getMilliseconds());   	//Get the millisecond (0-999)
console.log(date.getTime());	         //Get the time (milliseconds since January 1, 1970)
console.log(date.getDay());	            //Get the weekday as a number (0-6)
console.log(Date.now());          //Get the time. ECMAScript 5.


// getUTCDate()	Same as getDate(), but returns the UTC datet
// getUTCDay()	Same as getDay(), but returns the UTC day
// getUTCFullYear()	Same as getFullYear(), but returns the UTC year
// getUTCHours()	Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	Same as getMonth(), but returns the UTC month
// getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds