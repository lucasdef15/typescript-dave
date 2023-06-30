type stringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: StringOrNumberArray;
}

type UserId = stringOrNumber; // we can't do this assignment with interfaces.

// Literal Types
let myName: 'Dave' = 'Dave';

let userName: 'Dave' | 'Jhon' | 'Lucas';
userName = 'Lucas';

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

// void are for function that does not return anything
const logMsg = (msg: any): void => {
  return console.log(msg);
};

// logMsg('hello');

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multipply: mathFunction = function (a, b) {
  return a * b;
};

// logMsg(multipply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  //the required parameters need to come first, the optional parameters can't be first
  //for this exemple where some parameters are optional we need to use a type guard
  //type guard narrows down the type of value assigned to the variable
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMsg(addAll(2, 2, 2));
// logMsg(addAll(2, 2));
// logMsg(sumAll(2, 2));
// logMsg(sumAll(undefined, 2, 2));

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, cur) => prev + cur);
};

// logMsg(total(1, 2, 3, 4));

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    // this resolves the infinite loop and the never type
    if (i > 100) break;
  }
};

// custom type guard
const isNUmber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNUmber(value)) return 'number';
  return createError('this should never happen!');
};

//********************exercicises**************************

function plusMinus(arr: number[]): void {
  let countPlusNums: number = 0;
  let countMinusNums: number = 0;
  let countZeroNums: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPlusNums += 1;
    } else if (arr[i] < 0) {
      countMinusNums += 1;
    } else {
      countZeroNums += 1;
    }
  }

  let resultArray: number[] = [countPlusNums, countMinusNums, countZeroNums];

  return resultArray.forEach((num) => console.log(num / arr.length));
}

let numbers = [-4, 3, -9, 0, 4, 1];

// plusMinus(numbers);

//ex2
function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);

  let sum: number = arr.reduce((acc, cur) => acc + cur);

  let minSum: number = sum - arr[arr.length - 1];

  let maxSum: number = sum - arr[0];

  return console.log(minSum, maxSum);
}

let arr: number[] = [1, 2, 3, 4, 5];
miniMaxSum(arr);
