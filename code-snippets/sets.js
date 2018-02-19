



const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','December']);
console.log(months.has('January')) //easy way to check if element exists in a set)
console.log(months.size);   //gets the size without counting duplicates
months.delete('January') //easy way to delete a known item in a set
console.log(months)
months.add('January') //easy way to add an element to a set
for (const month of months) {
    console.log(month);
}

/* Additional */
const summer = new Set(['May', 'June', 'June','June','July', 'August']);
const arr = [...summer]; //convert set to arr
console.log(arr)
const winter = ['January', 'February', 'March','November','December', 'December','December'];
const unique = [...new Set(winter)]; // convert arr to set and can be used to remove duplicates from an array
console.log(unique)//eliminates duplicates in an array

// Old way of eliminating duplicates in an array
var all_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','December'];
var result
var items ={}
for (var i in all_months){
  items[all_months[i]]=""
}

for (var i in all_months){
  if (!all_months[i] in items){
    items[all_months[i]]="";
  }

}

  var new_arr = Object.keys(items)
  console.log(new_arr)




/*Why
Sets preserve iteration order
You can easily remove duplicates
You can delete items without having to know the index
Sets have a size property

For more see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
