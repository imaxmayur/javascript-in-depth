/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

console.log("------EVEN NUMBERS-----")
for (let i = 10; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


console.log("------ODD NUMBER------")

for(let i = 10; i <= 40; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}