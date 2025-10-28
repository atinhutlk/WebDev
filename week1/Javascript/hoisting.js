
const cube = function(x){
    return x * x * x;
}



const fullName = function(first, last) {
  return first + " " + last;
}

// 3.
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

//1. Cause with JavaScript Hoisting, var message is hoisted and there is undefined so when console.log(message) is called, it results in undefined.
//2. With let, the variable is also hoisted but not initialized, so accessing it before declaration results in a ReferenceError.
//3. showMessage is a const function expression: its name is hoisted but uninitialized (TDZ). Calling showMessage() before initialization throws ReferenceError, so nothing is logged and the assignment never runs.
//4.Because function declarations are fully hoisted. showMessage is created and initialized with its function body during the creation phase, before any code runs. So when console.log(showMessage()) executes, showMessage already refers to the function, and it logs "Hi there!" with no error.

// 1.

let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

console.log(welcome('Charlie', 'Munger'));
let lastLogin = '1/1/1970';
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
