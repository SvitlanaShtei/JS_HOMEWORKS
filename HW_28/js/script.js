'use strict';

const num1 = +prompt('Введіть число:');
const num2 = +prompt('Введіть ступінь:');

function power({base, exponent = 1}) {
    if (isNaN(base) || isNaN(exponent)) {
        return 'Помилка';
    }
    return base ** exponent;
}

const result = power({base: num1, exponent: num2});
alert(result);