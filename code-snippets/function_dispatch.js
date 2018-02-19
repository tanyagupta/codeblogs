
// Being able to use function as keys can make writing testcase  easier and more elegant

const test_cases = new Map();

test_cases.set (add,{input:[1,2], expected_output:3})
          .set (multBy5,{input:5, expected_output:25})


for (let [func, data] of test_cases ) {
  console.log(  func(data.input)===data.expected_output ? "test passed": `test failed for \n ${func}` )
}


/* functions to test */

function add  (data) {
  const [a,b]  = data
  return a+b


}
function multBy5 (a) {
  return (a ** 5)
}
