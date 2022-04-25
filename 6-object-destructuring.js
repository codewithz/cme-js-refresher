const country = 'India'

const address = {
    city: 'Some City',
    street: 'Some Street',
    pincode: 123456,
    country: 'Some Country'
}

// Traditional Way
// const street = address.street;
// const city = address.city;
// const pincode = address.pincode;

// ES6- Way

const { city, street, pincode } = address

console.log(street)
console.log(city)
console.log(pincode)
// Renaming
const { country: ct } = address

console.log(ct)
console.log(country)