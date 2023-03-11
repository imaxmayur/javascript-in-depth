/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

let num = 10;
while(num <= 40){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}



console.log("---------------")

let number = 10;
while(number <= 40){
    if(number % 2 === 1){
        console.log(number);
    }
    number++;
}