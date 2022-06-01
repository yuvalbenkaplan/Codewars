//remove the spaces from the string, then return the resultant string.

//assume input is a string
//use split to make an array strings of seperated words
//use join to to make the array into one string with no spaces

function noSpace(x){
    return x.split(' ').join('')
  }

  //check it workss
  console.log(noSpace("Hello, World!"))