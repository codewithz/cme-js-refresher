class Person {

    constructor(x) {
        this.name = x;
        console.log(this.name)
    }
    walk() {
        console.log(this.name + " is Walking")

    }
}
// --------------------------------------------------
class Trainer extends Person {

    constructor(name, degree) {
        super(name)
        this.degree = degree
    }
    train() {
        console.log("Trainer " +
            this.abc + " is training and holds " + this.degree)
    }
}


const t = new Trainer("Zartab", "Masters in IT")
t.train()