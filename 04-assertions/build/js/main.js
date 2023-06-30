"use strict";
// type assertions or casting
// Sometimes you will have information about the typr of a value that typescrit can't know about like when manipulating the DOM
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// angle brackets is the same, but can not be used with jsx files
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// avoid this
// 10 as string;
// 10 as unknown as string;
// The DOM
const img = document.getElementById('img');
const myImage = document.querySelector('img'); // ! is not null assertion
img.src = '#';
myImage.src;
