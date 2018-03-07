##Take your Javascript objects to a new level using ES6 Maps 


Maps are one of the new language features in ES6. In terms of functionality they are somewhat similar to objects, but as we will see in this blog they are way more versatile. 

Here's how to create a Map and put some data in it:

```javascript
let cat_map_db = new Map (); 

cat_map_db.set ("Foo", {weight:18, color:"orange" })
  .set ("Boley", {weight:12, color:"calico" })
  .set ("Bar", {weight:20, color:"black and grey" })
```

Here are some basic Map operations:

| Operations        | Code          
| :-----------------|------------- 
| Check if a key exists in a Map| `cat_map_db.has("foo")` 
| Count elements | `cat_map_db.size`, _can not do this with objects_    
| Add an item|`cat_map_db.set ("Boley", {weight:12, color:"calico" })`      
| Get the value given a key|`cat_map_db.get ("Bar")`      
| Delete an item by key| `cat_map_db.delete('Boley')`     
| Delete all | `cat_map_db.clear()`_can not do this with objects_     


>The key of the maps can be a function or an object! That makes for some great usecases. Here's one:


```javascript
const test_cases = new Map();
/* 
	This is a very basic handcrafted unit test suite
	We use function to be tested as a key, and the input and the expected output as values 

*/ 
test_cases.set (add,{input:[1,2], expected_output:3})
          .set (multBy5,{input:5, expected_output:25})

/* we run a complete test */
for (let [func, data] of test_cases ) {
  console.log(func(data.input)===data.expected_output ? "test passed": `test failed for \n ${func}`)
}

/* functions to test */

function add  (data) {
  const [a,b]  = data
  return a+b

}
function multBy5 (a) {
  return (a ** 5)
}
```



##Bonus
####You can use the handy function below, which given a key-value Object will return the Map object


```javascript
function makeMap (objectLiteral) {
  let map = new Map ()
  let keys = Object.keys(objectLiteral)
  for (let k in keys) {
    map.set (keys[k], objectLiteral[keys[k]])
  }
  return map
}
```




Finally, before coding up any new ES6 feature remember always to check the excellent
[compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
