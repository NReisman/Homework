window.app = window.app || {};
window.app.pcsTools = (function () {
  'use strict';

  function get(selector) {
    return document.querySelector(selector);
  }

  function setCss(elem, property, value) {
    //console.log('in set with', property, value);
    elem.style[property] = value;
  }

  function getCss(elem, property) {
    //console.log('in get with', property);
    return elem.style[property];
  }

  function addEventListener(elem, type, callback) {
    elem.addEventListener(type, callback);
  }


  return {
    wrap: function (selector) {
      const elem = get(selector);

      return {
        /*setCss: (property, value) => setCss(elem, property, value),
        getCss: (property) => getCss(elem, property)*/
        css: function (property, value) {
          if (arguments.length === 2) {
            setCss(elem, property, value);
            return this;
          } else {
            return getCss(elem, property);
          }
        },
        click: function(callback)  {
          addEventListener(elem, 'click', callback);
          return this;
        },
        hide: function() {
          setCss(elem, 'display', 'none');
          return this;
        },
        show: function(displayValue = 'block') {
          setCss(elem, 'display', displayValue);
          return this;
        },
        //hmwk
        colorChange: function(value){
          let a = Math.floor(Math.random() * 255); 
          let b = Math.floor(Math.random() * 255); 
          let c = Math.floor(Math.random() * 255);
            this.css('color',value);
            value = "rgb(" + a + "," + b + "," + c +")";
            return this;
        }
        
      };
    }
  };
})();