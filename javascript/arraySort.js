function sorting(x){                // funciton for sorting elements in descending order(works only for strings)
    x.sort();
    x.reverse();
    return x;
}

let arr = ["My", "name", "is", "Prashant", "Joshi"];
console.log(sorting(arr));
arr = [765,56,6,87,45,90];
console.log(arr.sort(function(a,b){return a - b;}));    // sorts numbers in assending order
console.log(arr.sort(function(a,b){return b - a;}));    // sorts numbers in descending order


for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = arr[i]
    arr[i] = points[j]
    arr[j] = k
  }
console.log(arr);               // perfect way to sort numbers 
