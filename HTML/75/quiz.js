window.app = window.app || {};
window.app.pairs = (function () {
  'use strict';
  function myPerson() {

  }
  let maleFirst = ["jack", "joe", "john", "joel", "jim"];
  let femaleFirst = ["sara", "samantha", "sandy", "shirley", "sasha"];
  let lasts = ["stein", "gold", "green", "smith", "jones"];

  //main function
  function makePpl(num) {
    let ppl = new Array(num);
    let men = [];
    //fill array with myPerson
    for (let i = 0; i < num; ++i) {
      ppl[i] = new myPerson();
    }

    //assign ids for each person
    for (let i = 0; i < ppl.length; i++) {
      ppl[i].id = i;
    }

    //assign last names
    for (let i = 0; i < ppl.length; i++) {
      ppl[i].lastName = lasts[Math.floor(Math.random() * lasts.length)];
    }

    //create random number from 0-40 to use to assign male firsts, assign gender to those indeces
    let x;
    while (men.length < 20) {
      x = Math.floor(Math.random() * 40);

      if (!men.includes(x)) {
        men.push(x);
        ppl[x].first = maleFirst[Math.floor(Math.random() * maleFirst.length)];
        ppl[x].gender = "m";
      }
    }
    
    //assign female firsts and gender, match the pairs and ids
    let m = 0;
    for (let i = 0; i < ppl.length; i++) {
      if (ppl[i].first === undefined) {
        ppl[i].first = femaleFirst[Math.floor(Math.random() * femaleFirst.length)];
        ppl[i].gender = "f";

        ppl[i].pair = men[m++];
        ppl[(ppl[i].pair)].pair = ppl[i].id;

      }
    }
    return ppl;
  }
  console.log(makePpl(40));
}());
