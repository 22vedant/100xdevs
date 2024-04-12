// function hello(firstName: string) {
// 	console.log(firstName)
// }

import { string } from 'zod';

// hello("vedant")
//type inference
// function add1(a: number, b:number){
// 	return a+b
// }

// function add1(a: number, b: number): number {
// 	return a + b;
// }

// function isLegal(a: number) {
// 	if (a >= 18) return true;
// 	else return false;
// }

// // console.log(add1(2,3))

// function returnAfter(a: number, fn: (a: number) => boolean) {
// 	console.log('inside return after function');
// 	return function () {
// 		setTimeout((a) => {
// 			fn(a);
// 		}, 1000);
// 	};
// }

// // const age = isLegal(20)

// // console.log(age)
// console.log(returnAfter(12, isLegal));

interface User {
	firstName: string;
	lastName: string;
	email?: string; //here the question mark implies that email is optional ie. user can pass it or can choose to skip it
	age: number;
}

//interfaces lets you implement a class

const isLegal = (userObj: User) => {
	if (userObj.age >= 18) return true;
	else return false;
};
let myObj = {
	firstName: 'Vedant',
	lastName: 'Chinta',
	email: 'awdawd',
	age: 21,
};
console.log(isLegal(myObj));
//types and interfaces let you aggregate your data but they have their differences
//interfaces can implement a class but type cannot implement a class
type newUser = {
	firstName: string;
	lastName: string;
	email?: string; //here the question mark implies that email is optional ie. user can pass it or can choose to skip it
	age: number;
};

type StringOrNumber = string | number;

function printid(id: StringOrNumber) {
	console.log('your id is  ' + id);
}

printid(23);
printid('65');

type Employee = {
	name: string;
	startDate: Date;
};

interface Manager {
	name: string;
	department: string;
}

type TechLead = Employee & Manager;

const t: TechLead = {
	name: 'vedant',
	startDate: new Date(),
	department: 'computer',
};

console.log(t);
