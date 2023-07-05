"use strict";
// Generics
// placeholder or type variable
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('jhon'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'jhon' }));
console.log(isObj(null));
// indication when we need a generic is when my function has to do some logic or thinking about what it needs to return
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Lucas' }));
// console.log(processUser({ name: 'Lucas' }));
const getUsersProperty = (
// here we have two generics T and K
users, // an array of objects of type T
key // the key of the object of type T
) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];
console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));
console.log(getUsersProperty(usersArray, 'phone'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('Dave');
console.log(store.state);
store.state = 'Dave';
// store.state = 12;
const myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
myState.state = [42, false, true];
console.log(myState.state);
//****************************************************** */
//***********Exercises***********************************/
// Exercise 1:
// Create a generic function called printArrayLength that takes an array of any type and logs the length of the array.
console.log('**********exercises************');
const printArrayLength = (arr) => {
    console.log(arr.length);
};
printArrayLength(['lucas', 2, 3]);
// Exercise 2:
// Create a generic class called Pair that takes two type parameters, T and U, representing the types of its two values. The class should have a constructor that takes two arguments of type T and U and stores them as instance variables. Implement a method called getFirst that returns the first value and a method called getSecond that returns the second value.
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getFirst() {
        return this.first;
    }
    getSecond() {
        return this.second;
    }
}
const pair = new Pair('Hello', 123);
console.log(pair.getFirst());
console.log(pair.getSecond());
// Exercise 3:
// Create a generic function called reverseArray that takes an array of any type and returns a new array with the elements in reverse order.
const reverseArray = (arr) => {
    return arr.reverse();
};
const myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));
// Exercise 4:
// Create a generic class called Stack that represents a stack data structure. The class should have a generic type parameter T representing the type of elements in the stack. Implement the following methods:
// push(item: T): Adds an item to the top of the stack.
// pop(): T | undefined: Removes and returns the item from the top of the stack, or returns undefined if the stack is empty.
// isEmpty(): boolean: Returns true if the stack is empty, false otherwise.
class Stack {
    constructor(stack) {
        this.stack = stack;
        this.stack = stack;
    }
    get state() {
        return this.stack;
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        if (this.stack.length) {
            return this.stack.pop();
        }
        else {
            return undefined;
        }
    }
    isEmpty() {
        return !this.stack.length;
    }
}
const stack = new Stack(['js', 'html']);
stack.push('css');
console.log(stack.state);
console.log(stack.pop()); // css
console.log(stack.pop()); // html
console.log(stack.pop()); // js
console.log(stack.pop()); // undefined
console.log(stack.isEmpty()); // true
// Exercise 5:
// Create a generic function called mergeArrays that takes two arrays of the same type and merges them into a single array. The function should return a new array that contains all the elements from both input arrays.
const mergeArrays = (arr1, arr2) => {
    let newArray = [];
    return (newArray = [...arr1, ...arr2]);
};
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));
