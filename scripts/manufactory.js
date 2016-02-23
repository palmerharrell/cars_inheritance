"use strict";

function Car() {
	this.manufactured_date = Date.now();
}

// Adding a method to the Car prototype:
Car.prototype.changeManufacturedDate = function(newDate) {
	this.manufactured_date = newDate;
}

function Make(maker) {
	this.manufacturer = maker;
}
Make.prototype = new Car();

function Honda(name) {
	this.modelName = name;
}
Honda.prototype = new Make("Honda");

function Accord() {
}
Accord.prototype = new Honda("Accord");

var accord = new Accord();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new objects for each of your three favorite cars.
*/
var accord2 = new Accord();
var accord3 = new Accord();
var accord4 = new Accord();

/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

