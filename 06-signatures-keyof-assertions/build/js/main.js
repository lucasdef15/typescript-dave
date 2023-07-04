"use strict";
// index signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); // ts can't know this is undefined
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
//using the keyof assertion
// here keyof creates an specific literal type with the keys od Student
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// when we dont know the type os the object
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
// using the record type we still need to provide the utility type keyof
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
//****************************************************** */
//***********Exercises***********************************/
// Exercise 1:
// Declare an interface named Person with an index signature that allows any string key and a corresponding value of type string. Create an object of type Person and assign values to some keys. Access and log the values of the object using both dot notation and bracket notation.
console.log('**********exercises************');
const lucas = {
    name: 'Lucas',
    stack: 'Typescript',
};
let key1 = 'name';
let key2 = 'stack';
console.log(lucas.name);
console.log(lucas.stack);
console.log(lucas[key1]);
console.log(lucas[key2]);
// Exercise 2:
// Create a function named getTotal that takes an object of type TransactionObj (as defined in your class) as an argument. The function should calculate and return the total of all the values in the object. Test the function with the todaysTransactions object and log the result.
const getTotal = (obj) => {
    let result = 0;
    for (const key in obj) {
        result += obj[key];
    }
    return result;
};
console.log(getTotal(todaysTransactions));
const dataObject = {
    isDay: 'boolean',
    weekday: 'string',
    degrees: 'number',
};
for (const key in dataObject) {
    console.log(`${key}: ${dataObject[key]}`);
}
// Exercise 4:
// Create a function named updateValue that takes an object of type Student (as defined in your class) and a key of type keyof Student as arguments. The function should prompt the user to enter a new value for the specified key and update the object with the new value. Test the function with the student object and a key of your choice.
// const updateValue = <K extends keyof Student>(obj: Student, key: K, value: Student[K]) => {
//   const newObject: Student = { ...obj, [key]: value };
//   return newObject;
// };
const updateValue = (obj, key, value) => {
    const newObject = Object.assign(Object.assign({}, obj), { [key]: value });
    return newObject;
};
console.log(updateValue(student, 'GPA', 7));
