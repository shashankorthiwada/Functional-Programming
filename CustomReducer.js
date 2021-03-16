//Implement Your own reducer using For
const numbersArr = [2, 5, 2, 4, 10, 2];

const customReducer = (arrayOfNumbers) => {
  let total = 0;

  arrayOfNumbers.forEach((ele) => {
    total += ele;
  });

  return total;
};

console.log(customReducer(numbersArr));
