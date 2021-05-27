document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Date Formats in JavaScript";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";

let date = new Date();
date.setDate(28);	        // the day as a number (1-31)
document.write(date + "<br>");
date.setFullYear(2020,11,21);	    // the year (optionally month and day)
date.setHours(22);	        // the hour (0-23)
document.write(date + "<br>");
date.setMilliseconds(576);	// the milliseconds (0-999)
date.setMinutes(60);    // the minutes (0-59)
document.write(date + "<br>");
date.setMonth(2);	        // the month (0-11)
document.write(date + "<br>");
date.setSeconds(67);	    // the seconds (0-59)
document.write(date + "<br>");
date.setTime(654768987987);	        // the time (milliseconds since January 1, 1970)
document.write(date + "<br>");
