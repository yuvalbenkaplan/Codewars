//instructions: create a function that parses a positive integer into an array of its digits, then return the array reversed

//example: if input is 1234, return [4,3,2,1]

function digitize(n) {
    let numArr = Array.from(String(n), Number);
    return numArr.reverse()
    }


    console.log(digitize(1234))