function fibonacci(n) {
	const fibonanswer = [0, 1];
	for (let i=0; i<=n; i++) {
		fibonanswer.push(Number(fibonanswer[i])+Number(fibonanswer[i+1]))
	}

return fibonanswer;
}



//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

console.log(fibonacci(8))
