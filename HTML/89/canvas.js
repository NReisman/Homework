(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  context.fillRect(25, 25, 50, 50);

  context.fillStyle = 'red';
  context.fillRect(75, 75, 75, 50);

  context.lineWidth = 6;
  context.strokeRect(75, 75, 75, 50);

  context.lineWidth = 6;
  context.strokeStyle = 'green'
  context.strokeRect(150, 150, 30, 30);

  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(275, 150);
  context.lineTo(300, 175);
  context.lineTo(300, 125);
  //context.lineTo(275, 150);
  context.closePath();
  context.stroke();

  context.lineWidth = 6;
  context.strokeStyle = 'orange';
  context.beginPath();
  context.moveTo(325, 150);
  context.lineTo(300, 75);
  context.lineTo(300, 125);
  //context.lineTo(325, 150);
  context.closePath();
  context.stroke();

  context.beginPath();
  // context.moveTo(400, 400);
  context.strokeStyle = 'blue';
  context.arc(400, 400, 50, 0, 2 * Math.PI/*3*/, false);
  //context.stroke();
  context.fill();
}());