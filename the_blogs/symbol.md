## ES6 Symbol for worry free team code development

[The ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/), more popularly known as **ES6** is the first major revision of Javascript in the last 15 years. Naturally it offers many features that will change how the veterans code. But there are some features that will affect the newbies too. 

One such feature is a curious primitive called the symbol (and its associated creator function `Symbol()`). Symbol in lay programmer's term is a value that is guaranteed to be unique during an app's lifetime.  If we write code like, `var id = Symbol('id');` then id's value is unique. If somewhere else I write `var aid = Symbol('id');`, aid === id will be false. 


### So what? 
Best explained in code. Two teams working on a project. They do not know of each other. They both access a global object, `const global_data  = new Map();`

## Team A


```javascript
function team_a_world (){
  let outside_portal = {} // we will put in stuff that we want the outside world to see
  
  // We want to store some data in a global object. We do not know it's details and 
  // we do not know who else will use it

  let id = Symbol('id')
  global_data.set(id, "Team  A data ")


  // we send a show method to the world so that we can show it
  outside_portal.show = function get_data () {
    return global_data.get(id);

  }

  return outside_portal
}
```
## Team B

```javascript
function team_b_world () {
  // Things we want others too see
  let export_stuff = {}
  
  let id  = Symbol('id')
  
  // Team b do not have to check if id exist in the database
  // do not have to do any adjustment if it does exist
  // it can just set the id

  global_data.set(id, "Team  B data ")
    export_stuff.show = function get_data () {
      return global_data.get(id);
    }
    return export_stuff;
}

```


### The world that does not collide
```javascript
//do_team_b ()
let world1 = team_a_world()
let world2 = team_b_world()

console.log(world1.show())
console.log(world2.show())
console.log(global_data)

```


Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
