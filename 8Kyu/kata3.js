//instructions: create a function that takes a number (N) greater then 0, and return an array with even integers from N to 1

// example: if 5 is passed to the function, return [5,4,3,2,1]

const reverseSeq = n => {
    let reversedArr = []
    for (i=n;i>0;i--){
      reversedArr.push(i)
    }
    return reversedArr;
  };

  console.log(reverseSeq(5))