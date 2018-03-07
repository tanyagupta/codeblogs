#Sets will set you free (at least from the hassles of duplicate checking)



Sets are one of the new language features in ES6. They are easy to use and can be quite useful. 

You can create a set very quickly from an existing arrays:

`const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','December']);`

Since set elements are unique the duplicate 'December' will be ignored, without raising any error.

While both objects and the new ES6 Map also provide the support for unique elements, Set, preserves the iteration order of its elements. So when we need a collection where the order of iteration *and* uniqueness matter, Set comes on top.

Consider the following array that contains the month names when the temperature dipped below a threshold. 

`const low_temp_months = ['January','January', 'February', 'March','November', 'December','December'];`

As you notice there are some duplicates perhaps caused by multiple readings submitted for the same month. If you want the month names to be unique you can do the following:

1. Create a set from the low_temp_months array, this will remove the duplicates
2. Use the [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax to unpack the set elements
3. ["destructure"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the unpacked element back into an array 

All the three aspect can be implemented in a very nice one liner!

```javascript 
const winter_months = [...new Set(low_temp_months)];
``` 

> The pattern 
> `[...new Set (array_with_duplicates)]` will always give you an array with the duplicates removed. Nice, right?

As I mentioned at the beginning, sets are very easy to use, here are some basic operations:

| Operations        | Code          
| :-----------------|-------------| 
| Check if element exists in a set| `months.has('January')` 
| Count elements? | `months.size`      
| Add _without knowing the index_|`months.add('January')`      
| Delete _without knowing the index_| `months.delete('January')`       


The code to walk a set is also nice and compact
 
 ```javascript
 for (const month of months) {
 	console.log(month)
 }
 ```    
I found it strange that the primitive set operations like intersection, union, difference and superset were not directly implemented as part of the Set class. You can get the code to here: [look for Implementing basic set operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.