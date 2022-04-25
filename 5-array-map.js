const colors = ['green', 'red', 'blue']

function convertToLi(color) {
    return `<li>${color}</li>`
}

const mappedArray = colors.map(convertToLi)

console.log(mappedArray)

const mappedArrayAF = colors.map(color => `<li>${color}</li>`)

console.log(mappedArrayAF)