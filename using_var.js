var sayHello = 'Say Hello';

function hello  () {
	var sayHi = 'Say Hi'; // available anywhere in the function 

	if (sayHi === 'Say Hi') {
		let sayBye = 'Say Bye';
		console.log(sayBye) // will return value -> available anywhere in the block it is defined in
	}

	console.log(sayBye) // will not  return value  (function scope)

}
hello()
console.log(sayHello) // will return value
console.log(sayHi) // will be undefined

