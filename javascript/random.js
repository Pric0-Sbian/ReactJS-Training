document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Math Methods";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#a8aaa6";
document.getElementById("dis").style.fontStyle = "italic";

console.log(Math.random());
//gives value between 0 and 1
console.log(Math.floor(Math.random() * 10));        //gives values between 0 to 10

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;          //this gives random no. between min and max(including min and max)
  }

  document.write(getRndInteger(54,987));
  