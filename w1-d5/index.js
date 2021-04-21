// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }

}

// Print odds 1-20 - Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
// Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function sequence(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
sequence([4, 2.5, 1, -0.5, -2, -3.5])

// Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.

function Sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum)
}
// Factorial - Write code that will multiply values from 1 to some value n until the variable product is larger than 1 billion (1e8 for short). At the end console.log that value of n.

function Factorial() {
    let total = 1;
    for (let n = 1; n < Number.MAX_VALUE; n++) {
        total = total * n;
        if (total > 1e8) {
            console.log(n)
        }
    }
}
Factorial()