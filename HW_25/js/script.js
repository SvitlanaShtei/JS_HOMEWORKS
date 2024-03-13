'use strict';

const num = +prompt('Введіть число:');

if (isNaN(num) || num < 1) {
    console.log('NaN');
} else {
    let divisor = 2;
    while (num % divisor !== 0) {
        divisor++;
    }
    console.log('Мінімальний дільник числа:', divisor);
}
