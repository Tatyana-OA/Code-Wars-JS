// Using callback with timeout for asynchronous operation

function getNumber(cb) {
	setTimeout(() => {
		cb(10);
	}, 100);
}

getNumber(n => {console.log(n)})



// Using promise

function getnumebrPromise() {
	return new Promise((resolve, reject) => {
		getNumber(resolve);
	})
}
const promise = getnumebrPromise();
promise.then(n=>console.log(n))
