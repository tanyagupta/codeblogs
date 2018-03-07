
/*
The following demo uses our prog-idiom API.
Here's the link to the API documentation: https://script.google.com/macros/s/AKfycbwvCitqB3dFUb0jV2kxqHH7tqr1o8-4MY9wzkmoIqwqoIfcVOs/exec

Use of ES6 Fetch to get JSON data from remote servers a.k.a. using REST APIs

Please uncomment the dispatch functions at the end to test out different functions

Note: The code needs

*/


const BASE_URL = "https://script.google.com/macros/s/AKfycbwvCitqB3dFUb0jV2kxqHH7tqr1o8-4MY9wzkmoIqwqoIfcVOs/exec?"

//query to get the repl url for the while idiom in Java
const q_for_url_java = "q=repl_urls&idiom=while&lang=java"
//query to get the repl url for the for idiom in Haskell"
const q_for_url_haskell = "q=repl_urls&idiom=for&lang=haskell"
const q_for_url_python = "q=repl_urls&idiom=array_walk&lang=python"
const q_for_url_kotlin = "q=repl_urls&idiom=array_length&lang=kotlin"
const q_for_url_c = "q=repl_urls&idiom=if&lang=c"

// query to get the code body given an URL
const q_for_code = "q=code&url="



/*

First example: Basic pattern and error checking
  Make a call to the API
  Get JSON
  Show

*/

function fetch_simple (url) {
  fetch(url)
  .then (response => {return response.json()})
  .then(data => console.log("We have data:" + data.repl_urls[0][0]))
  .catch (err => {
    console.log("===we have an error===")
    console.log(err.stack)
  })
}



/*

  Second  example:
  Make one call, get the result, use the result in the Second call and print the result


*/


function fetch_depentent () {

  fetch(BASE_URL + q_for_url_java)
    .then(response => {return response.json()})
    .then(data => {return data.repl_urls [0][0]})
    .then ( url => {return fetch(BASE_URL + q_for_code + url)})
    .then (response => {return response.json()})
    .then (data => console.log(data))
    .catch (err => {console.log(err)});


}


/*

  Third:
  Make parallel calls to many APIs -- and only move when ALL is done!

*/


function fetch_parallel (){

  let queries = [
    BASE_URL+q_for_url_java,
    BASE_URL+q_for_url_python,
    BASE_URL+q_for_url_kotlin,
    BASE_URL+q_for_url_c,

  ];

  // make fetch requests


  // map a fetch with every query_url
  // pass the whole map to promis all.
  // This is a trick and probably needs more explanaion
  // I can add 10 queries in the array above and the code will work!

  Promise.all(queries.map(query_url => fetch(query_url)))
  // Now we map each response to response.json()
  // Each response.json is a Promise so we can not treat it like regular data
  // So we need another Promise.all
  .then(responses => Promise.all(
    responses.map(r => r.json())
  ))
  // show the urls
  .then(all_result => {  // (*)
    for(let one_result of all_result) {
      console.log(one_result.repl_urls[0][0]);
    }
  });

}

function fetch_race (){

  let queries = [
    BASE_URL+q_for_url_java,
    BASE_URL+q_for_url_python,
    BASE_URL+q_for_url_kotlin,
    BASE_URL+q_for_url_c,



  ];

  // make fetch requests


  // map a fetch with every query_url
  // pass the whole map to promis all.
  // This is a trick and probably needs more explanaion
  // I can add 10 queries in the array above and the code will work!

  Promise.race(queries.map(query_url => fetch(query_url)))
  .then(result => {
      return result.json()
    }
  ).then (data => console.log(data))

  .catch (err => console.log(err));

}










function dispatch (function_key) {
  const dispatch_table = {

    simple: fetch_simple,
    n_call_dependent: fetch_depentent,
    n_call_parallel : fetch_parallel,
    n_call_winner: fetch_race
  }

  return dispatch_table [function_key]
}

//dispatch ("simple")(BASE_URL+q_for_ur_javal) // No error will generate data
//dispatch ("simple")(BASE_URL) // error fetch error
//dispatch ("n_call_dependent")()
dispatch ("n_call_parallel")()
//dispatch ("n_call_winner")()
