Homework 2

var set = new Set();
var Zakhar = {score: 10, name: "Zakhar", age: 22};
var Bob = {score: 10, name:"Bob", age: 18};
var Oleg = {score: 7, name:"Oleg", age: 27};
var Kirill = {score: 9, name: "Kirill", age: 22};
var Boris = {score: 6, name: "Boris", age: 39};
var Anastasia = {score: 9, name: "Anastasia", age: 20};

a) // Сумма очков

function sumScore(score) {
	let score = 0;
	for (let salary of Object.values(score)) {
		sum += score;
	}
return sum;
}


alert( sumScore(score) ); // Должен отдать сумму всех очков 

b) // Массив старше 18

// function myFunc(mySet) {
	// var x = new Array();
	// for (var i = 18; i < mySet.length; i++) {
		// if (isNan(mySet[i])){
			// x[i] = "18 and older";
		// } else {
			// x[i] = "younger than 18"
		// }
	// }
	// return x;

// }
// alert (myFunc()); 

function isBigEnough(value) {
	return value >=18;
}
var set = new Set().filtered(isBigEnough); // массив отдает участников старше 18
var Zakhar = {score: 10, name: "Zakhar", age: 22};
var Bob = {score: 10, name:"Bob", age: 18};
var Oleg = {score: 7, name:"Oleg", age: 27};
var Kirill = {score: 9, name: "Kirill", age: 22};
var Boris = {score: 6, name: "Boris", age: 39};
var Anastasia = {score: 9, name: "Anastasia", age: 20};


c) 
const filterItems = (query) => {
	return set.filter((el) =>
		el.toLowerCase().indexOf(query.toLowerCase()) > -1
		);
}

console.log(filterItems('B')); // ['Bob', 'Boris']

d)
