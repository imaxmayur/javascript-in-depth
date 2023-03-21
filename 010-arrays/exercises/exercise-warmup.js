/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/


let myArray = ["Mercury", "Venus", "Earth", "Mars"]

myArray.push("Jupiter");
console.log(myArray);

myArray.unshift("Sun");
console.log(myArray);

myArray.pop();
myArray.pop();
console.log(myArray);

myArray.shift();
myArray.shift();
console.log(myArray);