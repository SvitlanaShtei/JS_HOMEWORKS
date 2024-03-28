'use strict';

function generateKey(length, characters) {
    let result = '';

    if (typeof length !== 'number' || length <= 0) {
        return 'Недійсний параметр довжини';
    }

    if (typeof characters !== 'string' || characters.length === 0) {
        return 'Недійсний параметр символів';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);