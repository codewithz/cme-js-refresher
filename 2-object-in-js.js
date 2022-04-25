const person = {
    name: 'Zartab Nakhwa',
    age: 31,
    blog: 'www.codewithz.com',
    walk() {
        console.log("Walking")
    },
    talk() {
        console.log("Talking")
    }
}

console.log(person.name)
person.talk()

person['city'] = 'Mumbai'
console.log(person)

// person = {}

let targetMember = 'car'
let targetValue = 'Honda City'

person[targetMember] = targetValue

const someFunction = () => {
    console.log("Hello")
}

targetMember = 'testFunction'
targetValue = someFunction

person[targetMember] = targetValue

console.log(person)

person.testFunction()