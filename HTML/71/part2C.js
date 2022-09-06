window.app.counter.increment(10);

let counter1 = window.counterCreator();
let counter2 = window.counterCreator();

counter1.increment(5);
counter2.increment(15);

console.log(window.app.counter.print());
counter1.print();
counter2.print();