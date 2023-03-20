/*
    Write a function called "chill" that does the following:
    1. Prints out at the start: "Doing some chilling:"
    2. Then, prints out:
        "Chill... 1"
        "Chill... 2"
        "Chill... 3"
        ...
        "Chill... 10"
    3. Then finally prints out: "That was ice cold!""

    When you're done, call the function once.
*/

// declaring the function   
const chill = () => {
    console.log("Doing some chilling");

    for (i = 1; i <= 10; i++) {
        console.log(`Chill... ${i}`);
    }

    console.log("That was ice cold!");
};

// Function call

chill();
