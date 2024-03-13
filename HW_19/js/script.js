'use strict';

const year = +prompt('Введіть свій вік (число):');

if (!isNaN(year) && year !== null) {

    let ageType;
    if (year % 10 === 1 && year !== 11) {
        ageType = 'рік';
    } else if ([2, 3, 4].includes(year % 10) && ![12, 13, 14].includes(year % 100)) {
        ageType = 'роки';
    } else {
        ageType = 'років';
    }
    alert('Вам ' + year + ' ' + ageType);
} else {
    alert('Будь ласка, введіть коректне число!');
}
