console.log("Before")

// ------------------------------
// Callback Approach
// -------------------------------
// getUser(1, (user) => {
//     console.log("User", user)

//     //Get Repos

//     getRepositories(user.gitUser, (repos) => {
//         console.log("Repos:", repos)
//     })
// });

// -------------------------------------------------
// Promise Based Approach
// -----------------------------------------------

// const promise = getUser(1)

// promise
//     .then((user) => getRepositories(user.gitUser))
//     .then((repos) => console.log(repos))
//     .catch((error) => console.log(error.message))

// -------------------------------------------------
// Asyc Await Based Approach
// -----------------------------------------------

async function displayRepos() {
    const user = await getUser(1)
    console.log("User", user)
    const repos = await getRepositories(user.gitUser)
    console.log("Repos:", repos)
}

displayRepos()
console.log("After")






function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading user data from database...")
            resolve({ id: id, gitUser: 'codewithz' })
        }, 2000)
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Calling Github API for user[" + username + "].....")
            const repos = ["repo1", "repo2", "repo3"]
            resolve(repos)
            // reject(new Error("Internet not avaialble"))
        }, 3000)
    })
}