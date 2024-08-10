"use strict";

const multiArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const simpleArray = [1, 2, 3, 4];

function customFlatten(array) {
  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too many arguments provided",
    );
  }

  if (!Array.isArray(array)) {
    throw new Error("Provided argument is not an array");
  }

  function flattenArray(arr) {
    let result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item));
      } else {
        result.push(item);
      }
    });
    return result;
  }

  const isMultiDimensional = array.some((item) => Array.isArray(item));

  return isMultiDimensional ? flattenArray(array) : [...array];
}

const flattenedArray = customFlatten(multiArray);
console.log(flattenedArray);

const copiedArray = customFlatten(simpleArray);
console.log(copiedArray);
