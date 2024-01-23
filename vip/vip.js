//String
const gameName = new String('hitesh-hc-com')
console.log(gameName.charAt(2)); //Which character in which place
console.log(gameName.indexOf('t'));// finding the index of the character

const newString = gameName.substring(0, 4) //it only take the index from 0-3 and skipp the last
console.log(newString);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //Help to slice the value and take negative value skip the last index also
console.log(Orange,Lemon)
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; //riverse the index
const citrus1 = fruits.slice(-3, -1);
console.log(Lemon,Apple)



console.log(newStringOne.trim());// use to skip the useless stpaces in a word
console.log(gameName.split('-')); // take the parameter and separate this into comma, 




// Math terms
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));