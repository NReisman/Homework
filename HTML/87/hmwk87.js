(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }

        print() {
            console.log(`color:${this.color} speed:${this.speed}`);
        }
    }

    const v = new Vehicle("red");
    v.go(82);
    v.print();

    class Plane extends Vehicle {
        go(speed) {
            this.speed = speed;
            console.log(`now flying at speed ${speed}`);
        }

    }

    const p = new Plane("blue");
    p.go(700);
    p.print();


}());
