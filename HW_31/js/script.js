'use strict';

// 1. Об'єднання двох масивів: [1, 2, 3] і [4, 5, 6].
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray);

// 2. Створення масиву [3, 2, 1] з масиву [1, 2, 3].
const array3 = [1, 2, 3];
const reversedArray = array3.reverse();
console.log(reversedArray);

// 3. Додавання до масиву [1, 2, 3] елементів 4, 5, 6 в кінець.
const array4 = [1, 2, 3];
array4.push(4, 5, 6);
console.log(array4);

// 4. Додавання до масиву [1, 2, 3] елементів 4, 5, 6 в початок.
const array5 = [1, 2, 3];
array5.unshift(4, 5, 6);
console.log(array5);

// 5. Виведення першого елемента з масиву ['js', 'css', 'jq'].
const array6 = ['js', 'css', 'jq'];
console.log(array6[0]);

// 6. Виведення останнього елемента з масиву ['js', 'css', 'jq'].
const array7 = ['js', 'css', 'jq'];
console.log(array7[array7.length - 1]);

// 7. Відбір елементів [1, 2, 3] з масиву [1, 2, 3, 4, 5].
const array8 = [1, 2, 3, 4, 5];
const newArray1 = array8.slice(0, 3);
console.log(newArray1);

// 8. Відбір елементів [4, 5] з масиву [1, 2, 3, 4, 5].
const array9 = [1, 2, 3, 4, 5];
const newArray2 = array9.slice(3);
console.log(newArray2);

// 9. Перетворення масиву [1, 2, 3, 4, 5] у [1, 4, 5].
const array10 = [1, 2, 3, 4, 5];
array10.splice(1, 2);
console.log(array10);

// 10. Відбір елементів [2, 3, 4] з масиву [1, 2, 3, 4, 5].
const array11 = [1, 2, 3, 4, 5];
const newArray3 = array11.slice(1, 4);
console.log(newArray3);

// 11. Змішування масиву [1, 2, 3, 4, 5] у [1, 2, 3, 'a', 'b', 'c', 4, 5].
const array12 = [1, 2, 3, 4, 5];
array12.splice(3, 0, 'a', 'b', 'c');
console.log(array12);

// 12. Змішування масиву [1, 2, 3, 4, 5] у [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const array13 = [1, 2, 3, 4, 5];
array13.splice(1, 0, 'a', 'b');
array13.splice(6, 0, 'c');
array13.push('e');
console.log(array13);

// 13. Сортування масиву [3, 4, 1, 2, 7].
const array14 = [3, 4, 1, 2, 7];
array14.sort((a, b) => a - b);
console.log(array14);

// 14. Знаходження суми чисел у масиві [5, 6, 7, 8, 9].
const array15 = [5, 6, 7, 8, 9];
const sum = array15.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// 15. Створення масиву квадратів чисел з масиву [5, 6, 7, 8, 9].
const array16 = [5, 6, 7, 8, 9];
const squaresArray = array16.map(num => num * num);
console.log(squaresArray);

// 16. Відбір від'ємних чисел з масиву [1, -3, 5, 6, -7, 8, 9, -11].
const array17 = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNum = array17.filter(num => num < 0);
console.log(negativeNum);

// 17. Відбір парних чисел з масиву [1, -3, 5, 6, -7, 8, 9, -11].
const array18 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNum = array18.filter(num => num % 2 === 0);
console.log(evenNum);

// 18. Відбір рядків довжиною більше 5 символів з масиву ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].
const array19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const longStrings = array19.filter(str => str.length > 5);
console.log(longStrings);

// 19. Відбір підмасивів з масиву [1, 2, [3, 4], 5, [6, 7]].
const array20 = [1, 2, [3, 4], 5, [6, 7]];
const subarrays = array20.filter(item => Array.isArray(item));
console.log(subarrays);

// 20. Підрахунок кількості від'ємних чисел у масиві [5, -3, 6, -5, 0, -7, 8, 9].
const numbers = [5, -3, 6, -5, 0, -7, 8, 9];
const negativeNumbersCount = numbers.filter(num => num < 0).length;
console.log(negativeNumbersCount);