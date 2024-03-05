'use strict';

// Задача 1
// Створіть порожній об'єкт user.
// Додайте властивість name зі значенням John.
// Додайте властивість surname зі значенням Smith.
// Змініть значення властивості name на Pete.
// Видаліть властивість name з об'єкта.

const user = {
    name: 'John',
    surname: 'Smith',
};

user.name = 'Pete';

delete user.name;

console.log(user);


// Задача 2
// Чи можна змінити об'єкт, оголошений за допомогою const?

const user = {
    name: 'John'
};

// чи буде це працювати і чому ?
user.name = 'Pete';

// Відповідь: можна змінити властивості обєкту, але не можна змінити обєкт оголошеного через const
// name = 'Pete' буде працювати
console.log(user);

// Задача 3
// У нас є об'єкт, у якому зберігаються зарплати нашої команди:
//Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log('Загальна сума зарплат: ' + sum);
