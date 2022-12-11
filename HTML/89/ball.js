(function () {
  'use strict';


  class Ball {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }
    draw(g) {
      console.log(g.fillStyle);
      g.fillStyle = this.color;
      g.beginPath();
      //g.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      //correct is below.....
      g.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      g.fill();
    }
  }

  var color = document.getElementById("color").value;

  var c = document.getElementById("theCanvas");
  var g = c.getContext("2d");
  const b = new Ball(300, 200, 50, color);
  b.draw(g);


}());

