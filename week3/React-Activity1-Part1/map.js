const numbers = [2, 4, 6, 8, 10];

const doubledNumbers = numbers.map((num) => num * 2);

console.log('Original Numbers:', numbers);
console.log('Doubled Numbers:', doubledNumbers);

const celsiusTemperatures = [0, 20, 37, 100];
const kelvinTemperatures = celsiusTemperatures.map((celsius) => celsius + 273.15);

console.log('Celsius Temperatures:', celsiusTemperatures);
console.log('Kelvin Temperatures:', kelvinTemperatures);

const names = ['Alice', 'Bob', 'Charlie'];

const capitalizedNames = names.map((name) => name.toUpperCase());

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);