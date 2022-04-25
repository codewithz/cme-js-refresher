// Objects,Function,variable- camelCasing
// Class --> PascalCasing 


// camelCasing --> oneTwoThreeFour
// PascalCasing --> OneTwoThreeFour

class Person {

    constructor(x) {
        this.name = x;
        console.log(this.name)
    }
    walk() {
        console.log(this.name + " is Walking")

    }
}


const p1 = new Person("Zartab")
p1.walk()

const p2 = new Person("Arun")
p2.walk()