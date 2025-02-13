/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Successfully logged in!"

    HINT1: This is more challenging with a for loop
    HINT2: This is not an ideal candidate for a for loop!
    HINT3: You don't have to provide all parts of the for loop construct
*/

let loggedIn = false;
let loopCounter = 0;

while (!loggedIn) {
    console.log("Incorrect Login Credentials");
    if (loopCounter === 2){
        loggedIn = true;

    }

    loopCounter++;
}

console.log("Successfully Logged in!")