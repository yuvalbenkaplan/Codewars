//instructions: create a function that takes a string, and returns it with the first and last charater removed
//example: if input is "hello", return "ell"

function removeChar(str){
    let choppedArr = str.split("")
    choppedArr.pop()
    choppedArr.shift()
    return choppedArr.join("")
  };

  console.log("hello")