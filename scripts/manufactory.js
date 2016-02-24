"use strict";

function Vehicle() {
	this.manufactured_date = Date.now();
	this.model = null;
	this.tires = [];
	this.currentSpeed = 0;
}

// Adding a method to the Vehicle prototype:
Vehicle.prototype.accelerateTo = function(speed) {
	if (speed <= 0 || speed > 300) {
		return;
	};
	this.currentSpeed = speed;
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


var myNewCar = new Car(); // Create an instance of Car
var anAccord = new Accord(); // Create an instance of Accord

var Tire1 = new PExtreme();
var Tire2 = new PExtreme();
var Tire3 = new PExtreme();
var Tire4 = new PExtreme();

// Composition
myNewCar.model = anAccord;
myNewCar.tires.push(Tire1, Tire2, Tire3, Tire4);

console.log("myNewCar: ", myNewCar);



