//What: for-of lets you loop over data structures that are iterable: Arrays, strings, Maps, Sets and others

//example of an iterable
let iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}


for (const x of ['a', '', 'b']) {
    if (x.length === 0) break; //x will only exist inside this loop
    console.log(x);
}

//Old way #1

var arr = ['a', '', 'b'] //need to define the array separately
for (var i in arr ) {
    if (arr[i].length === 0) break; //break will work
    console.log(arr[i]);
}

//Old way #2
arr.forEach(function(element) {
  console.log(element);  //if (element.length===0) break; will not work here
});


for (var chr of "😠😡"){ //iterate through chars of string
  console.log(chr);
}



/* Why
for-of combines the advantages of forEach and for in without the drawback of either:
1) You can loop and use break/continue;
2) you can use generators
3) concise syntax
4) You cannot use break in forEach but you can in for..of
5) Concise syntax
BUT note for..of only works with iterable values - will not work for:  { age: 23, height: '5.5', "blah": 'hah' };


For more see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/
