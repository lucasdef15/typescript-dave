// type assertions or casting
// Sometimes you will have information about the typr of a value that typescrit can't know about like when manipulating the DOM

type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

// angle brackets is the same, but can not be used with jsx files
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

//be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

console.log(nextVal);

// avoid this
// 10 as string;
// 10 as unknown as string;

// The DOM

const img = document.getElementById('img') as HTMLImageElement;
const myImage = document.querySelector('img')!; // ! is not null assertion

img.src = '#';
myImage.src;
