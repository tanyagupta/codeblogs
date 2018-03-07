#Connecting the dots: rest parameter and spread operator in ES6


If you have been reading about ES6 and looking at code written in it I am sure you have seen the curious `...` three dots popping up everywhere. These three dots have two names and two very different meaning in ES6. The naming and the meaning depends on what section of the code they appear. `...` is called a *rest parameter* when used in function declaration, for example, in ` function foo (a, ...b){//do stuff}`, the dots _make_ `b` a rest parameter.  Any other place you see those dots they are *spread operator*s. The spread operators most commonly appear in array literals like this: `[...a, 4, 5, 6]` The `a` must be an iterable object like arrays, strings and the ES6's new Maps and Sets.  

>###Pro-tip
The iterable object can be user supplied as long as it implements the [iterable protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).


### The Meaning
When used as rest parameters, the dots "pack" many variables in to an array. So if we call the `foo` function defined above with `foo(5,6,9`, inside foo, a will be 5, and b will be an array of [6,9].  When used as a spread operator the dots "unpack" variables. So, inside `foo` one can write code like `big_array= [5,11,2,...b,4]`, and b will expand to it's elements as we will have an array with `[5,11,2,6,9,4]` 
///When foo is called a will be assigned to the value of the first argument, the rest of the arguments will be
// packed in an array and assigned to rest

Here's a more complete example:

```javascript
function foo (a, ...rest) {
  console.log("\n\nvalue of the first param is  " + a)
  console.log("the rest of the params are in an array: ")
  console.log(rest)
  console.log("unpack them to a list as follows:")
  console.log(...rest) 
  return "Done"
}

foo (5,6,9,11) // a will be assigned 5 and the rest will be [6,9,11]
foo (5,6,9,11, 2) // a will be assigned 5 and the rest will be [6,9,11, 12]
foo (5) // a will be assigned 5 and the rest will be empty
foo (5,6,[9,11]) // will be assigned 5 and the rest will be [6,[9,11]]

```

Feel free to dig deep into many interesting [usecases for rest parameters and spread operators](https://dmitripavlutin.com/how-three-dots-changed-javascript/). 

But as a **newbie** I find the following two very useful:

>The spread operator make array concatination much more natural. 

`joined_array = [...first_array, ...second_array, ...third_array]`

>You can combine it with ES6 Sets to remove duplicate from arrays

```javascript 
const unique = [...new Set(non_unique)];
``` 


Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
