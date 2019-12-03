const print1 = () => console.log('каждый');
const print2 = () => console.log('охотник');
const print3 = () => console.log('желает');
const print4 = () => console.log('знать');
const print5 = () => console.log('где');
const print6 = () => console.log('сидит');
const print7 = () => console.log('фазан');

const func1 = () => {
	console.log('каждый');
};

const func2 = () => {
func1();

setTimeout(() => { 
console.log('охотник');
}, 100);
}


const func3 = () => {
 setTimeout(() => {
   func2();
   console.log('желает');
 }, 25);

  setTimeout(() => {                                   
console.log('знать');
}, 25);

setTimeout(() => {
 console.log('где');

 setTimeout(() => {
   console.log('сидит');
 }, 75);
}, 50);

setTimeout(() => {
	console.log('фазан');
}, 25);

func3();








































------------------
2. Функция-конструктор, создающая объект прямоугольника. Объект должен иметь
- Размеры сторон 
- Единицы измерения
- Метод, возвращающий информацию о прямогульнике в форме "ширина: 100см., высота: 100см."

Написать функции: 
- getArea - расчет площади прямоугольника
- getPerimetr - расчет периметра прямоугольника

Создать объект прямоугольника и вывести в консоль:
- Информацию о нем
- Площадь и периметр, используя getArea и getPerimetr (by using call, apply, or bind)

1.
var length = 100 cm;
var width = 100 cm;

var Pryamougolnik = Object.assign(length, width);

let informacia = {
length: 100 cm;
width: 100 cm,

function getInfo() {
	console.log(this.informacia) // Спросить можно ли так
}
};

informacia.getInfo();

2. 
function getArea() {
	return length * width
};

function getPerimetr() {
	return (length + width) * 2
};

3. 
var length = 100 cm;
var width = 100 cm;

var Pryamougolnik = Object.assign(length, width);

getArea.call(obj);
getPerimetr.call(obj);





3.

/**
* реализовать функцию-конструктор копилки
* - номер счета - 3-х значное число, начиная с 1
* - если номер меньше трехзначного числа, слева заполняем нулями
* - состояние счета при создании, учитывается в транзакциях
*/

var accountId = 174;
var currBalance = 126000;

function Moneybox() {
	return accountId = 174;  // не допонял про "если номер меньше трехзначного числа"
	return currBalance = 126000;
};

/**
* реализовать получение информации о состоянии копилки
* вывод должен быть в формате
*
* ***
* Номер: 001
* На счету: 150
* Транзакции: 200, -100, 50
* ***
*/
function getMoneyboxInfo() {
	return 'Номер'+ ':' + accountId
	return 'На счету' + ':' + currBalance
	return 'Транзакции' + ':' + transcations

}

console.log(getMoneyboxInfo()); // уточнить у Лехи

/**
* реализовать добавление в копилку
*/
 // function sum(income + currBalance){

	if (to.String.call(input) !== "[object Array]")
	return false;

var income = Number;
for(var i=0;i<currBalance.length;i++)
{
	if(isNaN(income[i])){
		continue;
	}
	total += Number(currBalance[i]);
} 
return currBalance + income;
}

console.log(sum()) 

function addToMoneybox(Number + currBalance) {


}

/**
* реализовать изъятие из копилки
*/
function takeFromMoneybox() {
	var outcome = Number;
	for(var i=0;i<currBalance.length;i++)
	{
		if(isNan(outcome[i])){
			continue;
		}
		total += Number(currBalance[i]);
	}
	return currBalance - outcome;
}

console.log(currBalance - outcome);


const moneybox1 = new Moneybox(100);
const moneybox2 = new Moneybox;

/**
* пиши код ниже
*/





/**
* пиши код выше
*/


/**
* используя addToMoneybox и takeFromMoneybox определи следующие функции
*/
add100ToMoneybox1();    // добавит 100 в moneybox1
addToMoneybox2(500);    // добавит 500 в moneybox2
take250FromMoneybox2(); // изымает 250 из moneybox2
take10FromMoneybox1();  // изымает 10 из moneybox1

/**
* используя getMoneyboxInfo определи следующие переменные
*/
console.log(moneybox1Info);
console.log(moneybox2Info);
