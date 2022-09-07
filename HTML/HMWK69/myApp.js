const myApp = (function () {
    'use strict';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  /*function getDay(index) {
    return days[index - 1];
  }*/

  function getDayIndex(day) {
    //const d = day.toLowerCase();
    //return days.findIndex(e => e.toLowerCase() === d) + 1;

    return days.indexOf(day) + 1;
  }

  return {
    getDay: /*getDay*/ index => days[index-1],
    getDayIndex: getDayIndex
  };
})();

  
  

  
