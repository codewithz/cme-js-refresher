function sayHello() {
    console.log("Hello World")
}

let v1 = () => {
    console.log("Hello World from Arrow Function")
}

sayHello()
v1()

function squareMe(number) {
    return number * number
}

let square = (number) => {
    return number * number
}

console.log(squareMe(4))
console.log(square(3))

// Single Parameter -- we can get rid of the ()

let square1 = number => {
    return number * number
}

console.log(square1(5))


// If a single statement is passed in a function body
// we can get rid of  {}
// If it is a executable statement , it will be executed
// If it is a variable, it will be returned
// We can get rid of return keyword

// If {} -> return compulsory
// If no {} -> return statement is not required

let sqaure2 = number => number * number

console.log(sqaure2(8))

// -----------------------------------------------

function add(a, b, c) {
    return a + b + c
}

let add1 = (a, b, c) => a + b + c


function calculation(a, b, c) {
    const d = a + b + c
    const e = b + c
    return d - e
}

let calc1 = (a, b, c) => {
    const d = a + b + c
    const e = b + c
    return d - e
}






