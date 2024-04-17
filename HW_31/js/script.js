'use strict';

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const array3 = [1, 2, 3];
const reversedArray = array3.reverse();
console.log(reversedArray);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const array4 = [1, 2, 3];
array4.push(4, 5, 6);
console.log(array4);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const array5 = [1, 2, 3];
array5.unshift(4, 5, 6);
console.log(array5);

// 5. Дан массив ['js',"css', 'jq']. Выведите на экран первый элемент.
const array6 = ['js', 'css', 'jq'];
console.log(array6[0]);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const array7 = ['js', 'css', 'jq'];
console.log(array7[array7.length - 1]);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const array8 = [1, 2, 3, 4, 5];
const newArray1 = array8.slice(0, 3);
console.log(newArray1);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const array9 = [1, 2, 3, 4, 5];
const newArray2 = array9.slice(3);
console.log(newArray2);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
const array10 = [1, 2, 3, 4, 5];
array10.splice(1, 2);
console.log(array10);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const array11 = [1, 2, 3, 4, 5];
const newArray3 = array11.slice(1, 4);
console.log(newArray3);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const array12 = [1, 2, 3, 4, 5];
array12.splice(3, 0, 'a', 'b', 'c');
console.log(array12);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const array13 = [1, 2, 3, 4, 5];
array13.splice(1, 0, 'a', 'b');
array13.splice(6, 0, 'c');
array13.push('e');
console.log(array13);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const array14 = [3, 4, 1, 2, 7];
array14.sort((a, b) => a - b);
console.log(array14);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const array15 = [5, 6, 7, 8, 9];
const sum = array15.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const array16 = [5, 6, 7, 8, 9];
const squaresArray = array16.map(num => num * num);
console.log(squaresArray);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const array17 = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNum = array17.filter(num => num < 0);
console.log(negativeNum);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const array18 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNum = array18.filter(num => num % 2 === 0);
console.log(evenNum);

// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const array19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const longStrings = array19.filter(str => str.length > 5);
console.log(longStrings);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
const array20 = [1, 2, [3, 4], 5, [6, 7]];
const subarrays = array20.filter(item => Array.isArray(item));
console.log(subarrays);

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const numbers = [5, -3, 6, -5, 0, -7, 8, 9];
const negativeNumbersCount = numbers.filter(num => num < 0).length;
console.log(negativeNumbersCount);