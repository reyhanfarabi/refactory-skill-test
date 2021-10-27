function fizzbuzz(num) {
    const arr = [];

    for (let currentNum = 1; currentNum <= num; currentNum++) {
        // check if divisible by 3 & 5
        if (currentNum % 3 === 0 && currentNum % 5 === 0) {
            arr.push('FizzBuzz');
        } 
        // check if only divisible by 3
        else if (currentNum % 3 === 0) {
            arr.push('Fizz');
        } 
        // check if only divisible by 3
        else if (currentNum % 5 === 0 ) {
            arr.push('Buzz');
        }
        // non of the above are true
        else {
            arr.push(`${currentNum}`);
        }
    }

    return arr;
}