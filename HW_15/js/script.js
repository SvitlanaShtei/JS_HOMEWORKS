'use strict';

const operation = prompt('Введіть дію, яку хочете зробити (+, -, *, /):');
const num1 = +prompt('Введіть перше число:');
const num2 = +prompt('Введіть друге число:');

let result;

if (operation === '+') {
    result = num1 + num2;
    alert(num1 + ' + ' + num2 + ' = ' + result);
} else if (operation === '-') {
    result = num1 - num2;
    alert(num1 + ' - ' + num2 + ' = ' + result);
} else if (operation === '*') {
    result = num1 * num2;
    alert(num1 + ' * ' + num2 + ' = ' + result);
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
        alert(num1 + ' / ' + num2 + ' = ' + result);
    } else {
        alert('Ділення на нуль неможливе.');
    }
} else {
    alert('Невірна операція!');
}
