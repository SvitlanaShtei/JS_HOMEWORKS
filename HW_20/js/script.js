'use strict';

//Частина №1

let x = 10;
let y = 7;
const result = x <= y ? "x більше за y" : "x не більше, ніж y";
console.log(result);

//Частина №2

const num = +prompt("Введіть ціле число:");

let numLength = Math.abs(num).toString().length;

let positivity = num > 0 ? "позитивне" : num < 0 ? "негативне" : "нульове";

let lengthDescription;
switch (numLength) {
    case 1:
        lengthDescription = "однозначне";
        break;
    case 2:
        lengthDescription = "двоцифрове";
        break;
    case 3:
        lengthDescription = "трицифрове";
        break;
    default:
        lengthDescription = "більше трьох цифр";
}

console.log("Число " + num + " є " + lengthDescription + " " + positivity);

//Частина №3

const num1 = +prompt("Введіть перше число:");
const num2 = +prompt("Введіть друге число:");
const num3 = +prompt("Введіть третє число:");

let maxNumber;

if (num1 >= num2 && num1 >= num3) {
    maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
} else {
    maxNumber = num3;
}

console.log("Найбільше число: " + maxNumber);

//Частина №4

const a = +prompt("Довжина а трикутника:");
const b = +prompt("Довжина b трикутника:");
const c = +prompt("Довжина c трикутника:");

let triangleExists;

if (a + b > c && a + c > b && b + c > a) {
    triangleExists = true;
} else {
    triangleExists = false;
}

if (triangleExists) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}