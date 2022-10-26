(function () {
    'use strict';
  
    const clock = document.createElement('div');
    document.body.appendChild(clock);

    clock.className = 'clockClass';
  
    function updateClock() {
      clock.innerText = new Date().toLocaleTimeString();
    }
  
    setInterval(updateClock, 1000);
    updateClock();
  }());