(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Ant {
    static ANT_SIZE = 4;

    constructor(color = 'red') {
      this.x = window.innerWidth / 2;
      this.y = window.innerHeight / 2;
      this.color = color;
    }

    draw() {
      context.beginPath();
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, Ant.ANT_SIZE, Ant.ANT_SIZE * 2);
      context.fill();
    }

    move() {
      this.x += Ant.getRandomNumber(-1, 5);
      this.y += Ant.getRandomNumber(-1, 5);
      this.draw();
    }

    static getRandomNumber(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    }
  }

  const amountInput = document.querySelector('#amount');
  const colorInput = document.querySelector('#color');
  document.querySelector('#addAnt').addEventListener('submit', e => {
    e.preventDefault();
    for (let i = 0; i < amountInput.value; i++) {

      ants.push(new Ant(colorInput.value));
    }
  });

  const ants = [];
  for (let i = 0; i < 1000; i++) {
    ants.push(new Ant());
  }
  setInterval(() => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ants.forEach(ant => ant.move());
  }, 100);
}());