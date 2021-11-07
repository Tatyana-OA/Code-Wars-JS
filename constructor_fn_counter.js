// Constuctor function that creates an increment/decrement counter
function Counter() {
	var count = 0;
	this.incrementCounter = function() {
		count++;
		console.log(count);
	}
	this.decrementCounter = function() {
		count--;
		console.log(count);
	}
}

var counter1 = new Counter();
// one and the same counter -> 1, 0, -1
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();


// one and the same counter -> 1, 2, 3, 2
var counter2 = new Counter();
counter2.incrementCounter();
counter2.incrementCounter();
counter2.incrementCounter();
counter2.decrementCounter();


// will give referenceError which is an example of data encapsulation; -> advantage of closure 
console.log(count)
