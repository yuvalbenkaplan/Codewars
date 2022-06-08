//instructions: create a function that takes an array of numbers, and returns the sum of the squares of each number

//example, if input is [1,2], return 5 (1*1 + 2*2)


function squareSum(numbers){
    let sum = 0
    for (i=0;i<numbers.length;i++){
      sum += numbers[i]**2
    }
    return sum
  }

  console.log(squareSum([1,5]))
