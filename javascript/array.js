document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Arrays";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#e3e6e5";
document.getElementById("dis").style.fontStyle = "italic";

let arr = ["hello", "world"];
arr =new Array("HELLO", "WORLD");
console.log(arr[0]);
console.log(arr[1]);
let ob = {
    name:"Prashant Joshi",
    contact:8077734340
};
let result = ob.length;
console.log(result);

function isArray(x){
    return x.constructor.toString.indexOf("Array") > -1;
}
