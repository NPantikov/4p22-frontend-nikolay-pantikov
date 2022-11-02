"use strict";

const fibonacci = (function makeFibonacciFunction() {
  let next = 1;
  let last = -1;
  return function () {
    const result = last + next;
    last = next;
    next = result;
    console.log(result);
    return result;
  };
})()

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();