'use strict';

//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const stringExample_1='1';
const stringExample_2='2';
const stringExample_3='3';

const result = stringExample_1 + stringExample_2 + stringExample_3;
console.log(result);

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
const number = 10000;
const str = number.toString()
console.log(typeof str)

const digitsArray = str.split('');
console.log(digitsArray.join(' '));