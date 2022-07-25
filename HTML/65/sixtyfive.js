'use strict';

//jshint -W104
let x = 75;
let y = '75';

const pi = 3.14;

console.log(x===y);
//jshint -W116
//jshint -W030
console.log('if I forget to use three equal signs, the answer will appear here as true:'+ (x==y));
console.log(50 * pi);

let b=NaN;

if (isNaN(b)) {
    console.log( 'Not a Number!');
  }

