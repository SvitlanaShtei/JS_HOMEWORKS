"use strict";

//1
function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

console.log(getFactorial(3));

//2
function pow(num, degree) {
  if (degree === 1) {
    return num;
  }

  return num * pow(num, degree - 1);
}

console.log(pow(2, 3));

//3
function recursiveSum(a, b) {
  if (b === 0) {
    return a;
  }
  return recursiveSum(a + 1, b - 1);
}

console.log(recursiveSum(5, 3));
