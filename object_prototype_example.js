const vehicle = {
	drive: function() {
		console.log('the car is driving');
	}
}

const car = {
	make: 'Honda',
}

// changing the prototype of car to vehicle allows for car to use the method drive;

Object.setPrototypeOf(car, vehicle);
car.drive();
