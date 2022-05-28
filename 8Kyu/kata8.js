//instruction: create a function that takes a string, and returns a new string with all numbers removed

//example: if input is "hell1o", return "hello". If input is "1234" return ""

function stringClean(s){
    let withNoDigits = s.replace(/[0-9]/g, '')
    return withNoDigits;
  }

  console.log(stringClean("123 Hell7o"))