'use strict';

const num1 = +prompt('Введіть число:');
const num2 = +prompt('Введіть ступінь:');

function power(base, exponent = 1) {
    if (isNaN(base) || isNaN(exponent)) {
        return 'Помилка';
    }
    return Math.pow(base, exponent);
}

const result = power(num1, num2);
alert(result);