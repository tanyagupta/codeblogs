## ES6's new destructuring assignment: A cool way to organize your variables



[The ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/), more popularly known as **ES6** is the first major revision of Javascript in the last 15 years. Naturally it offers many features that will change how the veterans code. But there are some features that will affect the newbies too. 

One of the first programming concepts a new programmer learns is how to assign a value to a variable. We add an assignment statement (`=`) after the variable and then we write an expression whose value we want to assign to the variable. Javascript evaluates the expression and then assigns the evaluated value to the variable. 

The assignment statement can be a simple one: `var a = 5;// 5 is an expression with a value 5`.  

It can be quite complicated    

`var a = func_call(x,y) - some_string.length;`, in this case Javascript will execute the function call `func_call`, subtract `some_string`'s `length` , compute the final value and then assign it to the variable `a`


>Regardless of the possible complexities on the expression side, we newbies (who are craving for simplicity and familiarity as we learn the craft), could count on one thing: left side of the assignment statement will always have a single variable.   
>
>**Not anymore**!   

> The destructuring assignment syntax *adds* new (and exciting, at least for code veterans) ways to how assignments are handled. 


In one swoop (a.k.a. one line of code) the destructuring allows a programmer to break a compound structure like an array or an object down to its elements (or properties in case of objects) and assign those "destructured" pieces to variables. `[a,b] = [1,2]` is now a valid Javascript statement, which assigns 1 to a, and 2 to b. It gets complicated real fast! `[a, b, ...rest] = [1,2,f(x)]` is also a valid statement. It assigns 1 to  a, 2 to b and everything coming back from `f(x)` to rest. `let { assets:{photo:extracted_photo="data not found"}} = person;`, breaks an object person and assigns the value of person[assets[photo]] to the variable extracted_photo. 

> OK, technically the left side is still a single variable i.e. an array or an object. But we are not  dealing with a singular value, hence it makes it difficult to read, learn and understand. 

ES6 and its new features  are now a fact of life. We the newbies have to learn to live with and use it to our advantage. Here are some cool stuff that a newbie can do with destructring:

### Single Statment Variable Swap

Get rid of the pesky temp variable and three lines of code  or (some of your geeky XORs) and swap variables in one shot. 

```javascript
var a = 1;
var b = 3;
[a, b] = [b, a]; // 
console.log(a); // 3
console.log(b); // 1
```


### Parse function `returns` like a Pro
```javascript 
function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2

```

### Remove duplicates from Arrays
Create a duplicate free arrays in one shot. This one needs to know Sets too!

```javascript 
const unique = [...new Set(array_with_duplicates)];
``` 
1. Create a set from the array_with_duplicates array, this will remove the duplicates
2. Use the [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax to unpack the set elements
3. ["destructure"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the unpacked element back into an array 




Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
