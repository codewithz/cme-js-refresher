function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log("Inside the loop: ", i)
    }

    console.log("Outside the loop : ", i)
}

sayHello()

function sayHi() {
    for (let i = 0; i < 5; i++) {
        console.log("Inside the loop: ", i)
    }

    // console.log("Outside the loop : ", i)
    // ReferenceError: i is not defined
}

sayHi()


const someValue = "Hello"

// someValue = "Hi"
// TypeError: Assignment to constant variable.

// ----------------------------------------------------------------

var name = "CME"
var name = "Test"

var counter = 5;

if (counter > 4) {
    var name = "CME Inc"
}

console.log(name)
// ----------------------------------------

console.log("-----------using let --------------------")

let test = "Hello World"
// let test = "Hi World"

let someCounter = 5;

if (someCounter > 4) {
    let test = "Bye World"
}

console.log(test)