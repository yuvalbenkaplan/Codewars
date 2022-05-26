//instructions: create a function that takes an integer larger then 0, and return the sum of integers up to the input.

//example: if input is 3, return 6 (3+2+1)

var summation = function (num) {
    let sum = 0
    for (i=1;i<=num;i++){
      sum+=i
    }
    return sum
  }
  

  console.log(summation(3))