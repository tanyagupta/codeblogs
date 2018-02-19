

// The three dots in Javascript are called rest parameter and spread operator depending on where they are used
// ... is a rest parameter when used in function declaration as a formal parameter
// Any other time it is a spread operator
// rest parameter packs many variables in to an Array
// spread unpacks variables from an array

// When foo is called a will be assigned to the value of the first argument, the rest of the arguments will be
// packed in an array and assigned to rest
function foo (a, ...rest) {

  console.log("\n\nvalue of the first param is  " + a)
  console.log("the rest of the params are in an array: ")
  console.log(rest)
  console.log("unpack them to a list as follows:")
  console.log(...rest) //we can unpack them if we need to using the spread operator

  return

}

// Because of the ... foo can be called with any number of parameter

foo (5,6,9,11) // a will be assigned 5 and the rest will be [6,9,11]
foo (5,6,9,11, 2) // a will be assigned 5 and the rest will be [6,9,11, 12]
foo (5) // a will be assigned 5 and the rest will be empty
foo (5,6,[9,11]) // will be assigned 5 and the rest will be [6,[9,11]]
