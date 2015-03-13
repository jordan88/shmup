/**
 * 
 */
function Person(name) {
	this.name = name;
}

var args = ["John"];

var x = {};

var y = Person.apply(x, args);

console.log(x instanceof Person);