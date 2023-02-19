function add(num1, num2) {
    return (num1 + num2);
}
console.log(add(5, 5));
function milesPerYear(car) {
    var date = new Date().getFullYear();
    var m = ((car.miles) / (date - car.year)).toFixed();
    console.log("Your ".concat(car.make, ", ").concat(car.model, " used up ").concat(m, " miles per year! "));
}
var myOldCar = {
    model: "sonata",
    make: "Hyundai",
    year: 2014,
    miles: 85000,
    drive: "FWD"
};
milesPerYear(myOldCar);
var Truck = /** @class */ (function () {
    function Truck(model, make, year, miles, wheelCount) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.miles = miles;
        this.wheelCount = wheelCount;
    }
    return Truck;
}());
var myNewTruck = new Truck("Silverado", "Chevy", 2010, 700000, 8);
console.log(myNewTruck);
