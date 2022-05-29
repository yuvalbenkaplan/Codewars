//instructions: create a function that sorts an array of numbers in descending order
//then return the sum of the difference between consecutive numbers
//example: if [1,2,10] is passed, return (10-2) + (2-1), return 9

function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += (arr[i] - arr[i + 1]);
    }
    return sum;
  }

  console.log(sum)