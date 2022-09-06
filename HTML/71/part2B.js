
window.counterCreator =function () {
    "use strict";
    let count = 0;

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


