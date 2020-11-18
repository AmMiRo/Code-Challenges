// Description

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.



// Solution

const addDigits = function(num) {
    let solution = num.toString();
    
    while (solution.length > 1) {
        let sum = 0;
        for (let char of solution) {
            sum += Number(char)
        }
        solution = sum.toString();
    } 
    
    return Number(solution);
};