#The promise of a ```new Promise ()```


There are two parts to a promise implementation

Creating them

```Javascript
var p1 = new Promise(
    function (resolve, reject) {
        if (someflag) {
            resolve(some_data); // fulfilled
        } else {
            var reason = new Error('some error');
            reject(reason); // reject
        }
    }
);
```



And using them






There is a lot of excitement about promise. And there is lot of confusion.
A promise will let you start some work that will be done asynchronously and let you get back to your regular work. Then how is it different from call back? Promise supposed make the call back become flat - i.e. avoid nesting  - yet how is it actually done.

But if you write them the way they are meant to be used, you can write asynchronous code in a way that resembles synchronous code and is much more easy to follow:







When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function







Promises are not callbacks. A promise represents the future result of an asynchronous operation. Of course, writing them the way you do, you get little benefit. But if you write them the way they are meant to be used, you can write asynchronous code in a way that resembles synchronous code and is much more easy to follow:

More

Error handling


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0MzQ5MDE1MzZdfQ==
-->
