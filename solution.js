"use strict";
/* 
* Create a function which will print greeting message
* Create a function which will receives array of different users and greet each user.


```javascript
    greetMessage("John") // print "Good Morning, John"

    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"
``` */

function greetMessage(str) {
  console.log(`Good Morning, ${str}`);
}
greetMessage("John");

function greetUsers(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
greetUsers(["John", "Peter", "Mark"], greetMessage);

console.log(`*****************`);

/* 
#### Number Sqaure
* Write a function which will return sqaure of given number
* Write a function which will return sqaure of every number in array



```javascript
    const array = [1, 2, 3, 4, 5, 6]
    sqaure(array,squareNumber)  // return [1,4,9,16,25]
``` */
function squareNumber(num) {
  console.log(num * num);
}
const array = [1, 2, 3, 4, 5, 6];
function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    squareNumber(arr[i]);
  }
}
square(array, squareNumber);
