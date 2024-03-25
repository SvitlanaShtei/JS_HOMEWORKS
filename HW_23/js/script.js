'use strict';

//1  Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let num = '';
for (let i = 20; i <= 30; i += 0.5) {
    num += i + ' ';
}
console.log(num);

//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const price = 27;
let result = '';

for (let dollar = 10; dollar <= 100; dollar += 10) {
    const hryvna = dollar * price;
    result += dollar + ' доларів = ' + hryvna + ' гривень\n';
}
console.log(result);

//3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const N = 100;
let total = '';

for (let i = 1; i <= 100; i++) {
    const squared = i * i;
    if (squared <= N) {
        total += squared + ' ';
    } else {
        break;
    }
}
console.log(total);

//4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const number = 24;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}
if (isPrime) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);

//5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const myNumber = 81;

for (let i = 1; true; i++) {
    const calculatedNumber = 3 ** i;
    if (calculatedNumber > myNumber) {
        console.log('Can not find number');
        break
    }
    if (calculatedNumber === myNumber) {
        console.log('result: ', calculatedNumber);
        break
    }
}
