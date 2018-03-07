##Make your ES6 functions robust using the new default function parameters


Codes crash!  
And for the newbies codes crash frequently!  

Sometimes just a missing value of a parameter can break your function and in turn the whole app. So we crave for language support that help us write robust code.  ES6's default function parameter is one such welcome feature.  

Say you are writing a function that will perform a division by the value of one of its parameters. To avoid a division by zero you will have to do some detailed error checking.

```javascript

function divide_old(a, b) {
  //We have to make sure we have the right number of arguments and their values are not 0
  //We are simplifying here and assuming we are dealing only with positive numbers
  if (arguments.length===2 && arguments[0]>0 && arguments[1]>0){
    return arguments[0]/arguments[1]
  }
  else if(arguments.length===1 && arguments[0]>0){
    return arguments[0]/1
  }
}
```

With the default value for the parameters in ES6 you can now write code as follows


```javascript
function divide(a, b = 1) {
  return a / b;
}
```

Makes life a whole lot easier for both the user/caller of a function, who does not have to worry and of course for the function author.


For more see the [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
