'use strict';

//1  Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = '';
for (let i = 10; i <= 20; i += 1) {
    str += i + ', ';
}
console.log(str);

//2 Вивести квадрати чисел від 10 до 20.

let line = '';
for (let i = 10; i <= 20; i += 1) {
    line += i ** 2 + (i !== 20 ? ', ' : '');
}
console.log(line);

//3  Вивести таблицю множення на 7.
let table = '';
for (let i = 1; i <= 10; i += 1) {
    table += i + ' * 7 = ' + (i * 7) + '\n';
}
console.log(table)

//4 Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let i = 1; i <= 15; i += 1) {
    sum += i;
}
console.log(sum);

//5 Знайти добуток усіх цілих чисел від 15 до 35.

let product = 1;
for (let i = 15; i <= 35; i += 1) {
    product *= i;
}
console.log(product);

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let total = 0;
for (let i = 1; i <= 500; i += 1) {
    total += i;
}
let average = sum / 500;
console.log(average);

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenSum = 0;
for (let i = 30; i <= 80; i += 1) {
    evenSum += (i % 2 === 0) ? i : 0;
}
console.log(evenSum);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let result = '';
for (let i = 100; i <= 200; i += 1) {
    if (i % 3 === 0) {
        result += i + ', ';
    }
}
console.log(result);

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const num = 24;
let div = '';

for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
        div+= i + ', ';
    }
}
console.log(div);

//10 Визначити кількість його парних дільників і знайти їх суму.

const number = 24;
let divCount = 0;

for (let i = 1; i <= number; i += 1) {
    if (number % i === 0 && i % 2 === 0) {
        divCount++;
    }
}
console.log(divCount);


// 11 Знайти суму його парних дільників. (
const numbers = 24;
let divSum = 0;

for (let i = 1; i <= numbers; i += 1) {
    if (numbers % i === 0 && i % 2 === 0) {
        divSum += i;
    }
}
console.log(divSum);

//12 Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i += 1) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += i + ' * ' + j + ' = ' + (i * j) + '\n';
    }
    console.log(row);
}