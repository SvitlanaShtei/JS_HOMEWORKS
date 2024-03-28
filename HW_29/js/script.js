'use strict';

const padString = function (str, length, symbol, right = true) {
    if (typeof str !== 'string') return 'STR should be of type string';

    if (typeof length !== 'number' || isNaN(length)) return 'Length should be of type number';

    if (str.length >= length) return str.substring(0, length);

    if (typeof symbol !== 'string' || symbol.length !== 1) return 'Wrong symbol value';

    if (typeof right !== 'boolean') return 'The right parameter should be of type boolean';

    const repeatedElements = symbol.repeat(length - str.length);
    return right ? str + repeatedElements : repeatedElements + str;
}

console.log(padString('hello', 8, '&'));
console.log(padString('hello', 8, '*', false));
console.log(padString('hello', 3, '*', false));
