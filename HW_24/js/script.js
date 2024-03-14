'use strict';

const arr = [1, 2, 3, 4, 5];

//За допомогою циклу знайдіть суму елементів цього масиву, виведіть її в консоль.

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log('Сума елементів масиву:', sum);

//За допомогою циклу знайдіть суму квадратів елементів цього масиву.

let squaredSum = 0;

for (let i = 0; i < arr.length; i++) {
    squaredSum += arr[i] ** 2;
}

console.log('Сума квадратів елементів масиву:', squaredSum);
