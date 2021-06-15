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

// Take an array and calculate the sum of even and odd numbers using reduce.

const numList = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(acc, value) {
  if (value % 2 === 0) {
    return { ...acc, even: acc.even + value };
  }
  return { ...acc, odd: acc.odd + value };
}

console.log(numList.reduce(oddAndEvenSumReducer, { even: 0, odd: 0 }));

// Change the program to accomadate objects with key value pairs

const numberList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

function advancedOddAndEvenSumReducer(acc, value) {
  if (value.type === "even") {
    return { ...acc, even: acc.even + value.payload };
  }
  return { ...acc, odd: acc.odd + value.payload };
}

console.log(
  numberList.reduce(advancedOddAndEvenSumReducer, { even: 0, odd: 0 })
);

// Change the logic to use Switch

function oddAndEvenSumReducerWithSwitch(acc, value) {
  switch (value.type) {
    case "odd":
      return { ...acc, odd: acc.odd + value.payload };
    case "even":
      return { ...acc, even: acc.even + value.payload };
  }
}

console.log(
  numberList.reduce(oddAndEvenSumReducerWithSwitch, { even: 0, odd: 0 })
);
