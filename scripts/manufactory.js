"use strict";

function Vehicle() {
	this.manufactured_date = Date.now();
	this.model = null;
	this.tires = [];
}

// Car is a Vehicle
function Car() {}
Car.prototype = new Vehicle(); // Establish prototype chain

// Truck is a Vehicle
function Truck() {}
Truck.prototype = new Vehicle(); 

// Van is a Vehicle
function Van() {}
Van.prototype = new Vehicle(); 

// Adding a method to the Car prototype:
Car.prototype.changeManufacturedDate = function(newDate) {
	this.manufactured_date = newDate;
}

// Car *has* a Make
function Make(maker) {
	this.manufacturer = maker;
}

// Honda is a Make
function Honda(name) {
	this.modelName = name;
}
Honda.prototype = new Make("Honda"); 

// Accord is a Honda
function Accord() {
}
Accord.prototype = new Honda("Accord"); 

// Car *has* Tires
function Tire() {}

// Pirelli is a Tire
function Pirelli() {}
Pirelli.prototype = new Tire();

// PExtreme is a Pirelli
function PExtreme() {}
PExtreme.prototype = new Pirelli();




var aNewCar = new Car(); // Create an instance of Car
var myAccord = new Accord(); // Create an instance of Accord

var Tire1 = new PExtreme();
var Tire2 = new PExtreme();
var Tire3 = new PExtreme();
var Tire4 = new PExtreme();

// Composition
aNewCar.model = myAccord;
aNewCar.tires.push(Tire1, Tire2, Tire3, Tire4);

console.log("aNewCar: ", aNewCar);


// Create three new objects for each of your three favorite cars.

var myAccord2 = new Accord();
var myAccord3 = new Accord();
var myAccord4 = new Accord();

/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

