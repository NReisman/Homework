//(function () {
'use strict';


function Vehicle(color) {
    this.color = color;
}

Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`vehicle is now going at speed ${speed}`);


};
Vehicle.prototype.print = function () {
    console.log(`color:${this.color} speed:${this.speed}`);
};

const truck = new Vehicle('brown');
truck.go(75);

truck.print();

function Plane(color) {
    Vehicle.call(this, color);
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`vehicle is now flying at speed ${speed}`);

};

const myPlane = new Plane('white');
myPlane.go(150);
myPlane.print();

const car = new Vehicle('red');
car.go(65);
car.print();
