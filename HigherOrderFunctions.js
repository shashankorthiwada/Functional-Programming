// Write a Function which can tell whether a number is less than 10 or not
// and supply that function to Array.Filter to get an Array with no 10 in it.
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArray2 = [5, 1, 4, 3, 2, 2, 5, 9, 10, 11, 10];

const isNumberLessThanTen = (number) => number < 10;
console.log(testArray, testArray.filter(isNumberLessThanTen));
console.log(testArray2, testArray2.filter(isNumberLessThanTen));

//Given an Array of Numbers return an Object for each item

const numbersArray = [1, 4, 3, 2, 2, 5];

const numbersObj = numbersArray.map((number) => {
  return { number: number };
});

console.log(numbersArray, ...numbersObj);

//Given an array of numbers calculate the sum

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumOfArr = arrayOfNumbers.reduce((total, currentVal) => {
  total += currentVal;
  return total;
}, 0);

console.log(sumOfArr);

//Mapping numbersArray to an Object and then Calculating total sum of those elements

const test = numbersObj.reduce((total, initialVal) => {
  total += initialVal.number;
  return total;
}, 0);

console.log(test);
