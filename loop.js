// same sentence

// while loop basic form
function whileloop() {
    var i = 1;
    while(i < 2) {
        console.log(i);
        i++;
    }
}

// fizzbuzz with while loop
var output = [];
var count = 1;

function fizzBuzz(){
    while(count <= 100) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

// for loop basic form
function forloop() {
    for(var i = 1; i < 2; i++) {
        console.log(i)
    }
}

// fizzbuzz with for loop
var output = [];
function fizzBuzz(){
    for (var count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
    console.log(output);
}

// what is difference while and for loop?
// while (something is true) {          State
    // do something
// }

// for (i=0; i<2; i++){                 Iterate
    // do something
// }