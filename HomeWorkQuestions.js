const numbers = [2, 3, 5, 4, 6, 9, 10, 13, 15, 12, 10, 8, 16, 20, 30];

//Find Sum of All Odd Numbers in an Array.
const sumOfAllOddNumbers = (array) => {
  const result = array.reduce((total, initial) => {
    if (initial % 2 !== 0) {
      total += initial;
    }
    return total;
  }, 0);
  return result;
};

console.log("Sum Of Odd Numbers ", sumOfAllOddNumbers(numbers));

//Find Sum Of Numbers at Odd Indices
const sumOfAllNumbersAtOddIndices = (array) => {
  return array
    .filter((element, index) => index % 2 !== 0)
    .reduce((total, currentValue) => {
      return (total += currentValue);
    }, 0);
};

console.log(
  "Sum Of Numbers at Odd Indices: ",
  sumOfAllNumbersAtOddIndices(numbers)
);

// Find biggest Number in an Array
const biggestNumberInAnArray = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return currentValue > previousValue ? currentValue : previousValue;
  }, 0);
};

console.log("Biggest Number in the Array: ", biggestNumberInAnArray(numbers));

// Find the numbers which are divisible by 10
const numberDivisibleByTen = (array) => {
  return array.filter((ele) => ele % 10 == 0);
};

console.log("Numbers divisible by 10 ", numberDivisibleByTen(numbers));

const increaseOddAndDecreaseEven = (array) => {
  return array.map((element) => {
    if (element % 2 === 0) {
      return (element -= 1);
    } else {
      return (element += 1);
    }
  });
};

console.log(numbers, increaseOddAndDecreaseEven(numbers));
