'use strict';

//1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const array1 = ['a', 'b', 'c', 'd'];
const result1 = array1.slice(0, 2).join('+') + ', ' + array1.slice(2).join('+');
console.log(result1);

//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const array2 = [2, 5, 3, 9];
const result2 = array2[0] * array2[1] + array2[2] * array2[3];
console.log(result2);

//3. Дан массив [[1, 2, 3], [4, 5, 6], [7,8,9]]. Выведите на экран цифру 4 из этого массива.
const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result3 = array3[1][0];
console.log(result3);

//4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const array4 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
const result4 = array4.js[0];
console.log(result4);

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
const array5 = Array.from({length: 5}, (_, index) => 'x'.repeat(index + 1));
console.log(array5);

//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
const array6 = Array.from({length: 5}, (_, i) => String(i + 1).repeat(i + 1));
console.log(array6);

//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
function arrayFill(value, length) {
    const filledArray = [];
    for (let i = 0; i < length; i++) {
        filledArray.push(value);
    }
    return filledArray;
}
const filledArray = arrayFill('x', 5);
console.log(filledArray);

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = array8.findIndex((value, index, array) => array.slice(0, index + 1).reduce((acc, val) => acc + val, 0) > 10);
const numberOfElements = index !== -1 ? index + 1 : array8.length;
console.log("8.", numberOfElements);

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const array9 = [1, 2, 3, 4, 5];
const reversedArray = [];
for (let i = array9.length - 1; i >= 0; i--) {
    reversedArray.push(array9[i]);
}
console.log(reversedArray);

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const array10 = [[1, 2, 3], [4, 5], [6]];
const sum1 = array10.flat().reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.
const array11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const sum2 = array11.flat(2).reduce((acc, curr) => acc + curr, 0);
console.log(sum2);
