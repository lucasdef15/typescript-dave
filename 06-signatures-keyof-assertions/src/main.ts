// index signatures

// they are useful when you're creating an object but you don't know the exact names of the object keys but you do know the shape of the object and yiy can declare the type of the keys and the type od the values.
// also typescript requires an index signature if you attempt to access an object property dynamically.

//this is the index signature
// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']); // ts can't know this is undefined

//****************************************************** */

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

//using the keyof assertion
// here keyof creates an specific literal type with the keys od Student
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// when we dont know the type os the object
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

//****************************************** */

// utility type record

// interface Incomes {
//   [key: 'salary']: number;
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// using the record type we still need to provide the utility type keyof
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

//****************************************************** */
//***********Exercises***********************************/
// Exercise 1:
// Declare an interface named Person with an index signature that allows any string key and a corresponding value of type string. Create an object of type Person and assign values to some keys. Access and log the values of the object using both dot notation and bracket notation.
console.log('**********exercises************');
interface Person {
  [key: string]: string;
  name: string;
  stack: string;
}

const lucas: Person = {
  name: 'Lucas',
  stack: 'Typescript',
};

let key1: string = 'name';
let key2: string = 'stack';

console.log(lucas.name);
console.log(lucas.stack);
console.log(lucas[key1]);
console.log(lucas[key2]);

// Exercise 2:
// Create a function named getTotal that takes an object of type TransactionObj (as defined in your class) as an argument. The function should calculate and return the total of all the values in the object. Test the function with the todaysTransactions object and log the result.

const getTotal = (obj: TransactionObj) => {
  let result: number = 0;
  for (const key in obj) {
    result += obj[key];
  }
  return result;
};

console.log(getTotal(todaysTransactions));

// Exercise 3:
// Declare a type named DataTypes that is a union of the following string literals: 'number', 'string', and 'boolean'. Declare an interface named DataObject with an index signature that allows any string key and a corresponding value of type DataTypes. Create an object of type DataObject and assign values to some keys. Use keyof assertion to iterate over the keys of the object and log both the key and its corresponding value.

type DataTypes = 'number' | 'string' | 'boolean';

interface DataObject {
  [key: string]: DataTypes;
}

const dataObject: DataObject = {
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

const updateValue = <K extends keyof Student>(
  obj: Student,
  key: K,
  value: Student[K]
) => {
  const newObject: Student = { ...obj, [key]: value };
  return newObject;
};

console.log(updateValue(student, 'GPA', 7));
