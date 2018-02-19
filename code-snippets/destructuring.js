
// Arrays to invidual variables

const [first_name, last_name] = "Abir Qasem".split(" ")
console.log(first_name)

const [starting, ...rest] = "This is a long sentence".split (" ")
console.log (starting)
console.log(rest)

// Works for objects - in JSON

let person = {
        gender: "Male",
        name: "Rob",
        assets: {
            photo: {
                small: '/assets/photo/small/robert.jpeg',
                large:  '/assets/photo/large/robert.jpeg'
            },
            video: {
                teaching: '/assets/vids/teaching/robert1.avi',
                driving: '/assets/vids/teaching/robert1.avi'
            }
        },
        friends : ['mary','juan','rakesh']
    };

// The property pattern has to start from the root
// Get me the photo poperty which is inside my assets property
// store the result in extracted_photo
let { assets:{photo:extracted_photo="data not found"}} = person;
console.log(extracted_photo)
let { assets:{essay:extracted_essay="data not found"}} = person;
console.log(extracted_essay)


let [first]=person.friends
console.log(extracted_photo.small);        // /assets/photo/small/robert.jpeg
console.log(first)              //mary

//Old way

// TG's medium blog
// You tube API processing 


/*Why:
Easier to access a JSON object and get the value you need



For more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
