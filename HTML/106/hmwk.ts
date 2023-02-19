function add(num1: number, num2 :number) {
    return (num1 + num2);
}


console.log(add(5, 5));

interface car{
    model: string;
    make: string;
    year: number;
    miles: number;
    drive?: "AWD" | "4WD" |"FWD"|"RWD";
}
function milesPerYear(car: car) {
    let date = new Date().getFullYear();

    let m = ((car.miles) / (date - car.year)).toFixed();
    console.log(`Your ${car.make}, ${car.model} used up ${m} miles per year! `)
}
const myOldCar: car={
    model: "sonata",
    make: "Hyundai",
    year: 2014,
    miles: 85000,
    drive: "FWD"
}

milesPerYear(myOldCar);

class Truck implements car{
    constructor(public model: string, public make: string, public year: number, public miles: number,
        public wheelCount: number)
    { }
}

const myNewTruck = new Truck("Silverado", "Chevy", 2010, 700000, 8);
console.log(myNewTruck);