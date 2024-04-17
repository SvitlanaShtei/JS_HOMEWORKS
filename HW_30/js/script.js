'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function filterPositiveNumbers(arr) {
    const exampleArr = [];

    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Параметр має бути непорожнім масивом чисел';
    }

    const positiveNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }

    return positiveNumbers.length > 0 ? positiveNumbers : null;
}

console.log(filterPositiveNumbers(arr));
