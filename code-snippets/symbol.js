//What - it is a new primitive type in ES6.
// Language support for unique keys

//a symbol never clashes with any other property key (symbol or string).

// Some global data that will be used by many scripts that are unaware of each other
const global_data  = new Map();


// Team A
function team_a_world (){

  let outside_portal = {} // we will put in stuff that we want the outside world to see

  // We want to store some data in a global object  - we do not know it's details and we do not know who else will use it

  let id = Symbol('id')
  global_data.set(id, "Team  A data ")


  // to the world so that we can show it
  outside_portal.show = function get_data () {
    return global_data.get(id);

  }

  return outside_portal
}


function team_b_world () {
  // Thins we want others too see
  let export_stuff = {}
  // The following gurantees uniqueness
  let id  = Symbol('id')
  
  // Team b do not have to check if id exist in the datbase
  // do not have to do any adjustment if it does exist
  // it can just set the id

  global_data.set(id, "Team  B data ")
    export_stuff.show = function get_data () {
      return global_data.get(id);
    }
    return export_stuff;
}

//do_team_b ()
let world1 = team_a_world()
let world2 = team_b_world()

console.log(world1.show())
console.log(world2.show())
console.log(global_data)
