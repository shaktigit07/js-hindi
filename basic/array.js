const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) Add the value in the 0th place 
// myArr.shift() Remove the value from the 0th place


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //It slice the value and create a new array without affecting the original array

// console.log(myn1); //[1,2] it dosnt take the last index
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //it directly modify the original array ,it can remove add replace in the original array
// console.log("C ", myArr);
// console.log(myn2); // [1,2,3] it take the the all index


//Second class

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it push the value in the original array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) //it concat the value and return an new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //it return same as concat but it help when we try to concat more then one array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));