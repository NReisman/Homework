"use strict";

const lower=['a','b','c'];
const upper=['A','B','C'];
const mixedLetters=['A','b','c'];

function myEvery(myArray, callback){
        for(let i=0; i < myArray.length; i++){
               if (!callback(myArray[i])){
                return false;
                }
               }
            return true;    
}
        

function isUpper(myChar){
        return myChar === myChar.toUpperCase();
}

function isLower(myChar){
        return myChar !== myChar.toUpperCase();
}


console.log('this is upper',myEvery(upper, isUpper));
console.log('this is lower',myEvery(lower,isUpper));
console.log('this is mixed',myEvery(mixedLetters,isUpper));


console.log('this is upper',myEvery(upper, isLower));
console.log('this is lower',myEvery(lower,isLower));
console.log('this is mixed',myEvery(mixedLetters,isLower));

console.log('built in upper',upper.every(isUpper));
console.log('built in lower',lower.every(isUpper));
console.log('built in mixed',mixedLetters.every(isUpper));

//closure

function multiply(a,b){
        return a*b;
}

console.log('5*2:',multiply(5,2));
console.log('3*2:',multiply(3,2));
console.log('1*2:',multiply(1,2));


function getMultiplier(){
      return function(a,b){
        return a*b;
      };
}

console.log(getMultiplier()(5,2));

function newMultiplier(a){
        return function(b){
                return a*b;
        };
}

console.log(newMultiplier(5)(2));
