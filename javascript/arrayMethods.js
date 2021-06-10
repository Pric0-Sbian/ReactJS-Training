document.write('<h2 id = "dis" ></h2>');
document.getElementById("dis").innerHTML = "Array Methods";
document.getElementById("dis").style.textAlign = "center";
document.getElementById("dis").style.color = "#e3e6e5";
document.getElementById("dis").style.fontStyle = "italic";
let arr = ['hello', 'world'];
console.log(arr.length);
arr.push("This");
console.log(arr);
console.log(arr.sort());
console.log(arr.pop());
console.log(arr);
arr = ["My", "name", "is", "Prashant", "Joshi"];
console.log(arr.join(" "));
console.log(arr.shift());
console.log(arr);
arr.unshift("My");
console.log(arr);
arr.splice(4,0,". What's", "your", "name?");
console.log(arr);
arr.splice(4,3);
console.log(arr);
arr2 = ["Good","to",'Meet','You'];
console.log(arr.concat(arr2));          //can take any no. of arrays arr.conact(arr2,arr3,arr4) and we can also add values by it 
arr3 = arr.concat(arr2);
console.log(arr3);
arr = arr3.slice(0, 4);                 // slice(offset, length)




