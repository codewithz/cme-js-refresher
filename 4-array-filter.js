numbers = [1, 2, 3, 4, 5, 6]

function evenFilter(number) {
    return number % 2 == 0
}

const evenNumbers = numbers.filter(evenFilter)

console.log("O:", numbers)
console.log("Filtered:", evenNumbers)

const evenNumbersAF = numbers.filter(number => number % 2 == 0)
console.log("Filtered AF", evenNumbersAF)


const jobs = [
    { id: 1, position: 'Developer', isActive: true },
    { id: 2, position: 'Tester', isActive: true },
    { id: 3, position: 'Devops', isActive: false },
    { id: 4, position: 'Manager', isActive: true }
]

const filteredJobs = jobs.filter(job => job.isActive)

console.log(filteredJobs)