"use strict";

// функція indexOf
const arr = [1, 2, 3];
function indexOf(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(arr, 2));
console.log(indexOf(arr, 4));

// функція lastindexOf
const array = [1, 2, 3, 2, 1];
function lastIndexOf(arr, element) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log(lastIndexOf(array, 2));
console.log(lastIndexOf(array, 4));

//функція find
const arr = [1, 2, 3];
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

const result = find(arr, (element) => element > 1);
console.log(result);

//функція findIndex
const arr = [1, 2, 3];
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

const index = findIndex(arr, (element) => element > 1);
console.log(index);

////функція includes
const arr = [1, 2, 3];
function includes(array, valueToFind, fromIndex = 0) {
  fromIndex = Math.max(fromIndex, 0);

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === valueToFind) {
      return true;
    }
  }
  return false;
}

console.log(includes(arr, 1));
console.log(includes(arr, 2));
console.log(includes(arr, 3));
console.log(includes(arr, 4));
console.log(includes(arr, 2, 1));
console.log(includes(arr, 1, 2));

//функція every
const arr = [1, 2, 3];
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

console.log(every(arr, (value) => value > 0));
console.log(every(arr, (value) => value % 2 === 0));

//функція some
const arr = [1, 2, 3];
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

console.log(some(arr, (value) => value % 2 === 0));
console.log(some(arr, (value) => value > 3));

// Реалізація функції reduce
const arr = [1, 2, 3];
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (arguments.length < 3) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

console.log(reduce(arr, (acc, value) => acc + value, 0));
console.log(reduce(arr, (acc, value) => acc * value, 1));
console.log(reduce(arr, (acc, value) => acc.concat(value), []));
