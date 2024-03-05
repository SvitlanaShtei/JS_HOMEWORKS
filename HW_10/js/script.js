'use strict';

const num1 = +prompt('Введіть перше число:');
const num2 = +prompt('Введіть друге число:');

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;

let quotient;
if (num2 !== 0) {
    quotient = num1 / num2;
}

console.log('Результат додавання: ' + num1 + ' + ' + num2 + ' = ' + sum);
console.log('Результат віднімання: ' + num1 + ' - ' + num2 + ' = ' + difference);
console.log('Результат множення: ' + num1 + ' * ' + num2 + ' = ' + product);

if (typeof quotient !== 'undefined') {
    console.log('Результат ділення: ' + num1 + ' / ' + num2 + ' = ' + quotient);
} else {
    console.log('Ділення на нуль неможливе.');
}