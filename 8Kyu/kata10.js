//instructions: create a function that reverses a string
//example: in input is "word", return "drow"

function solution(str){
    return str.split("").reverse().join("")
  }

  console.log(solution("word"))