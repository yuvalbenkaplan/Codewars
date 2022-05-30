//Instructions: write a function that takes a string and returns a number

const stringToNumber = function(str){
    let strToNum = parseInt(str, 10)
    return strToNum;
  }

  console.log(stringToNumber("1001"))