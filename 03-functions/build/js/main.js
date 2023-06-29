"use strict";
// Literal Types
let myName = 'Dave';
let userName;
userName = 'Lucas';
// functions
const add = (a, b) => {
    return a + b;
};
// void are for function that does not return anything
const logMsg = (msg) => {
    return console.log(msg);
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multipply = function (a, b) {
    return a * b;
};
// logMsg(multipply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    //the required parameters need to come first, the optional parameters can't be first
    //for this exemple where some parameters are optional we need to use a type guard
    //type guard narrows down the type of value assigned to the variable
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(2, 2, 2));
// logMsg(addAll(2, 2));
// logMsg(sumAll(2, 2));
// logMsg(sumAll(undefined, 2, 2));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, cur) => prev + cur);
};
// logMsg(total(1, 2, 3, 4));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // this resolves the infinite loop and the never type
        if (i > 100)
            break;
    }
};
// custom type guard
const isNUmber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNUmber(value))
        return 'number';
    return createError('this should never happen!');
};
// exercicises
function plusMinus(arr) {
    let countPlusNums = 0;
    let countMinusNums = 0;
    let countZeroNums = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPlusNums += 1;
        }
        else if (arr[i] < 0) {
            countMinusNums += 1;
        }
        else {
            countZeroNums += 1;
        }
    }
    let resultArray = [countPlusNums, countMinusNums, countZeroNums];
    return resultArray.forEach((num) => console.log(num / arr.length));
}
let numbers = [-4, 3, -9, 0, 4, 1];
// plusMinus(numbers);
//ex2
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = arr.reduce((acc, cur) => acc + cur);
    let minSum = sum - arr[arr.length - 1];
    let maxSum = sum - arr[0];
    return console.log(minSum, maxSum);
}
let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
