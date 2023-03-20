/*
    Write a function called "noRemainder":

    1. This function has two parameters:
        - number
        - mod
    2. The function will return:
        - true: if "number" is evenly divisible by "mod" (no remainder)
        - false: if "number" is not evenly divisible by "mod" (has a remainder)

    3. Call your function like so:
        const result1 = noRemainder(10, 7); // result1 should be false
        const result2 = noRemainder(100, 10); // result2 should be true
*/
//my code
const noRemainder = (num, mod) => {
    
    return  (num % mod === 0);
    return  (num % mod != 0);
}

  noRemainder(2, 3);

    const result1 = noRemainder(10, 7);
    const result2 = noRemainder(100, 10);
   
    console.log(result1);
    console.log(result2);


    // By nader


    
const remainder = (Number, Mod) => {
    if (Number % Mod === 0) {
        return true;
    } 
        return false;
};

const result3 = remainder(10, 7);
const result4 = remainder(100, 10);
console.log(result3, result4 );