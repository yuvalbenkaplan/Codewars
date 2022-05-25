//instructions: create a function that takes a string, and returns the number of vowels

//example, if "abc" is passed, return 1, if "hello" is passed, return 2

function getCount(str) {
    let vowelsCount = 0;
    
    let vowels = ["a", "e", "i", "o", "u"]
    for (let char of str){
      if (vowels.includes(char)){
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }

  console.log(getCount("hello"))