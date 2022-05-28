//instructions: create a function that takes an array.
//if the array is empty or input is NULL return an empty array
//if the array is of integers, return and an array with 2 elements
//first elemnts is a counter of how many positive integers there are
//second element is the sum of all negative integers

function countPositivesSumNegatives(input) {
    let countPos = 0
    let sumNeg = 0
    let retArr = []
    if (!input || input.length === 0){
      return retArr
    }
    else {
    for (i=input.length-1;i>=0;i--){
      if (input[i]> 0){
        countPos = countPos + 1
      }
      else if (input[i]<0){
        sumNeg+=input[i]
      }
      
    }
      }
    retArr = [countPos, sumNeg]  
    return retArr;
  }

  console.log(countPositivesSumNegatives([1,2,3,4,5,-1,-2,-3,-4,-5]))