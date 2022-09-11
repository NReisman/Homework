window.app = window.app || {};

window.app.counter = (function (myModule) {
  'use strict';

  let count = 0;

  myModule.increment = function(num){
    count += num;
    return count;
  };

  // SL - why print? its more of getCount or just count
  myModule.print = function(){
    return count;
  };

  return myModule;

})(window.app.counter || {});

// console.log(window.app.counter.increment(2));
// console.log(window.app.counter.increment(3));
// console.log(window.app.counter.print());

// SL - nice




