// SL - not in app...
window.counterCreator =function () {
    "use strict";

    // SL - this cant work. count and amt are in same scope so how can one be counter specific and one be shared by all counters?
    let count = 0;

    // SL - not sure what intent here is but these 2 lines are basically same as let amt = 2. Why set to 1 then increment?
    let amt = 1;
    amt ++;

    return {

      increment: function (num) {
        count += num;
        return count;
      },

      print: function() {
        console.log(count);
      },

      printamt: function(){
        console.log(amt);

      },
      count : 0
    }
    ;

  };

  /*jshint -W117*/
//  let counter =counterCreator();
//   counter.increment(2);
//   counter.print();

//   counter.increment(4);

//   counter.print();
//   let counter2 = counterCreator();
//   counter2.increment(3);
//   counter2.print();
// counter2.printamt();


