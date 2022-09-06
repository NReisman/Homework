
(function () {
"use strict";

const array1 = [1, 2, 3, 4];
function myMap(array, mapCallback){

let result = [];

    for (let i=0, len=array.length; i < len; i++){
        result.push(mapCallback(array[i],i,array));
    }

    return result;
}

function myFunction(num) {
    return num * 2;
  }

const array2 = myMap(array1,myFunction);

console.log(`original array: ${array1}`);
console.log(`new array: ${array2}`);
}());
