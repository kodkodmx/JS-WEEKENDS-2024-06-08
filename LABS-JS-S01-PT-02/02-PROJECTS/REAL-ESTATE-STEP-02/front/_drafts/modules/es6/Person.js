// ES6 Modules
export class Person {
	constructor( name, age ) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
		return this.name + " " + this.age;
	}
}
