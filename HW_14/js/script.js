'use strict';

const num1 = +prompt('Введіть перше число:');
const num2 = +prompt('Введіть друге число:');

if (isNaN(num1) || isNaN(num2)) {
    alert('Ви ввели некоректні числа!');
} else {
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mult = num1 * num2;

    let quotient;

    if (num2 !== 0) {
        quotient = num1 / num2;
    }
    alert(
        num1 + ' + ' + num2 + ' = ' + sum + '\n' +
        num1 + ' - ' + num2 + ' = ' + sub + '\n' +
        num1 + ' * ' + num2 + ' = ' + mult + '\n' +
        (quotient !== undefined ? num1 + ' / ' + num2 + ' = ' + quotient : 'Ділення на нуль неможливе.')
    );
}