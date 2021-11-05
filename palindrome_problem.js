function palindrome(str) {
return str.toLowerCase().split('').reverse().join('')===str.toLowerCase();
}

console.log(palindrome('Kayak')); //true
console.log(palindrome('Hello')); //false
console.log(palindrome('kayak')) //true
console.log(palindrome('darkness'))//false
