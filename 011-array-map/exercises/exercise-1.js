/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/


const bulls = [true, true, false, true, false, false]

const newBulls = bulls.map((bull) => {

    if (bull) {             // bull === true
        return Math.random();
    } 
    return 0;
 })
 
 console.log(newBulls);