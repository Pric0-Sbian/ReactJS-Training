/*
for(){}
foreach(){}
while(){}
do{}
while(){}
*/
let arr:number[] = [1,2,3,4,5,6,7];
for(let data of arr)
{
    console.log(data);
}
console.log('new');
//console.log(arr);
for(let i = 0; i < arr.length;i++)
{
    console.log(arr[i]);
}
console.log("new");
let k:number = 0;
while(k < arr.length)
{
    console.log(arr[k]);
    k++;
}
console.log("new");
let j:number = 0;
do
{
     console.log(arr[j]);
     j++;
}
while(j < arr.length)
