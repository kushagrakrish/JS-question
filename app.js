// to check the duplicate element in a array using filter method

const arrNumber = [1, 2, 3, 5, 3, 9, 9];
const duplicates = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicates);

// To find max and min value in array
const Num = [5, 85, 66, 999, 26556, 69, 52];
const maxFunction = (arr) => {
  return arr.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  });
};
console.log(maxFunction(Num));

const minFunction = (arr) => {
  return arr?.reduce(function (prev, cur) {
    return prev < cur ? prev : cur;
  });
};
console.log(minFunction(Num));

// To find Second Largest value and remove first largest value in array

const intArray = [1, 2, 8, 9];
const largestValue = (arr) => {
  firstLargestValue = Math.max(...arr);
  index = arr.indexOf(firstLargestValue);
  arr?.splice(index, 1);
  secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};
console.log(largestValue(intArray));
