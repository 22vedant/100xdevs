// function hello(firstName: string) {
// 	console.log(firstName)
// }

// hello("vedant")
//type inference
// function add1(a: number, b:number){
// 	return a+b
// }

function add1(a: number, b: number): number {
	return a + b;
}

function isLegal(a: number) {
	if (a >= 18) return true;
	else return false;
}

// console.log(add1(2,3))

function returnAfter(fn: () => void) {
	setTimeout(fn, 1000);
}

// const age = isLegal(20)

// console.log(age)

const newReturn = returnAfter(() => console.log('hello'));
console.log(newReturn);

// error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
