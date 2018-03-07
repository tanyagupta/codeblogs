#Tame the API calls like a pro using ES6's fetch

[The ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/), more popularly known as **ES6** is the first major revision of Javascript in the last 15 years. It comes loaded with new features. Some of them even the newbies can use, quite easily.

One of the challenges for many web programmers is to efficiently leverage the vast data that is available on the web. Web APIs give you access to databases with rich information that your program can use. Before ES6 the most common ways of doing this was to use a third party library, with the most popular being jQuery's [ajax](http://api.jquery.com/jquery.ajax/). The native Javascript method of using  [`XMLHttpRequest (XHR)`] (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) objects were not as popular as they should have been, mainly because in my humble newbie opinion, it was not very accessible to inexperienced developers. 

The new fetch method in ES6 is not only accessible it is also quite versatile. 


> ###If you just want to make a call to an API and get some JSON data

```javascript
function fetch_simple (url) {
  fetch(url)
  .then (response => {return response.json()}) // JSON parsing done for you
  .then(data => {
  	// do whatever you want to do with the data
  })
  .catch (err => {
    console.log("===we have an error===")
    console.log(err.stack)
  })
}
```

> ### Let's turn things up a notch. 
> ###Maybe you need to make an API call to get some initial data and then use that data to make another call. 
> ###No Problem!

```javascript
function fetch_depentent () {

  fetch(url_for_data_0)
    .then(response => {return response.json()})
    .then(data_0 => {
    	// do stuff with data_0 
    	// then return the piece you need for the next call
    	
    	return stuff_needed_for_next_call
    })
    .then ( url => {return fetch(url_for_data_1&q= stuff_needed_for_next_call)})
    .then (response => {return response.json()})
    .then (data =>{ 
    	// do stuff with data
    
    })
    .catch (err => {console.log(err)});

}

```

> ### What if you want to make many calls but that are not dependent on one another but you want to collect the results in one basket

```javascript
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

```



> ### What if just one result would do!

```javascript

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



``` 
Finally, before coding up any new ES6 feature remember always to check the excellent [compatibility table](http://kangax.github.io/compat-table/es6/) to make sure that your target browsers have support for the feature.
 







