const sayHelloArrow = () => "Hello, World!";

const doubleArrow = x => x * 2;

const addArrow = (x, y) => x + y;

const personArrow = {
    name: "John",
    sayHi: () => "Hi, " + personArrow.name + "!"
}

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach(num =>  doubled.push(num * 2));


