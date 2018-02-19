//What: Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.

function divide(a, b = 1) {
  return a / b;
}
console.log(divide(15,2));//
console.log(divide(5)); //

//Old way

function divide_old(a, b) {

  if (arguments.length===2 && arguments[0]>0 && arguments[1]>0){
    return arguments[0]/arguments[1]
  }
  else if(arguments.length===1 && arguments[0]>0){
    return arguments[0]/1
  }

  //return a / b;
}
console.log(divide_old(15,2));//
console.log(divide_old(5)); //

/*
Why
for callers - less to worry - robust code for example division by 0 in the above example

For function writers  - less code to write
 
For more see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
*/
