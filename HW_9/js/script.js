'use strict';

const temperature = +prompt('Введіть температуру:');
const unit = prompt('Введіть одиницю виміру (C або F):');

if (!isNaN(temperature)) {
    let result = null;

    if (unit.toUpperCase() === 'C') {
        result = temperature + ' градусів Цельсія = ' + ((temperature * 9 / 5) + 32) + ' градусам Фаренгейта';
    } else if (unit.toUpperCase() === 'F') {
        result = temperature + ' градусів Фаренгейта = ' + ((temperature - 32) * 5 / 9) + ' градусам Цельсія';
    }
    alert(result);
} else {
    alert('Помилка');
}