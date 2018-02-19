// Map objects -

// Ojects are the typical JS ways to build a data structure to hold some values

let cat_db = {
  "Foo":{weight:18, color:"orange" },
  "Boley": {weight:12, color:"calico" },
  "Bar": {weight:20, color:"black and grey" },

}

// With the Map object this can be done as follows

let cat_map_db = new Map (); // create a Map object

cat_map_db.set ("Foo", {weight:18, color:"orange" })
  .set ("Boley", {weight:12, color:"calico" })
  .set ("Bar", {weight:20, color:"black and grey" })


// or you can use the handy function below, which given a key-value Object will return the Map object
function makeMap (objectLiteral) {
  let map = new Map ()
  let keys = Object.keys(objectLiteral)
  for (let k in keys) {
    map.set (keys[k], objectLiteral[keys[k]])
  }
  return map
}

let another_cat_db = makeMap (cat_db)

// Check if some thing is there

console.log(cat_map_db.has("foo")) // false because we have Foo not foo

// Get a value

console.log(cat_map_db.get("Foo")) // Foo's weight and color

// set a value
cat_map_db.set ("Bar", {weight:19, color:"black and grey" })
console.log(cat_map_db.get ("Bar")) // Bar lost some weight



// Benefits simple call to size - more readable and more efficient than the old key-length pattern
console.log(`The size is: ${cat_map_db.size}`)
console.log("The size is:", Object.keys(cat_db).length) // old ways

// loops are more readable
for (let [cat, details] of cat_map_db){
    console.log(cat + " weight: " + details.weight)
}
