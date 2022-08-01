const dowU = (function () {
    'use strict';
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

    return {
      getDay: index => days[index - 1],
      getIndex: day => {
        const d = day.toLowerCase();
        for (let i = 0; i < days.length; i++) {
          if (days[i].toLowerCase() === d) {
            return i + 1;
          }
        }
      }
    };
  })();

  console.log('dowU.getDay(3)', dowU.getDay(3));
  console.log("dowU.getIndex('Tuesday')", dowU.getIndex('Tuesday'));

const intU=(function(){
    'use strict';

    //setRate= (rate) => rate;
    function setRate(rate){
        return rate;
    }

    function setYears(years){
        return years;
    }

    function calculateInterest(amt){
        return (amt*setRate()*setYears());
    }

})();


  