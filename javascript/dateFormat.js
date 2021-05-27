document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Date Formats in JavaScript";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";
//ISO Date international standard time 2015-03-25
// Long Date                    03/25/2021
// Short Date               Mar 25 2021/25 Mar 2015
console.log(new Date("2021-05-27T11:17:30Z"));      //iso
// short dates
console.log(new Date("03/27/2021"));
//long dates
console.log(new Date("27 May 2021"));
console.log(new Date("May 27 2021"));
let date = new Date();
console.log(date.parse());      // converts date to milliseconds and milliseconds to date
// millieseconds are calculated from 1 january 1970