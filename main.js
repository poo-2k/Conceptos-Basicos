import Car from "./auto.js";

let car1 = new Car("Ford", 2000, "red", 100);
let car2 = new Car("Nissan", 2010, "blue");
let car3 = new Car("Toyota", 2018);

car1.turnOn();
car1.go(50,1.5);
car1.turnOff();
car1.go(50,1.5);

console.log(`Mileage ${car1.kilometraje}`);
car1.kilometraje = 5;
console.log(`Mileage ${car1.kilometraje}`);


// car2.turnOn();
// car2.turnOff();

// car3.turnOn();
// car3.turnOff();