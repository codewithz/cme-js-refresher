console.log("Before")

getUser(1, (user) => {
    console.log("User", user)

    //Get Repos 

    getRepositories(user.gitUser, (repos) => {
        console.log("Repos:", repos)
    })
});

console.log("After")






function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading user data from database...")
        callback({ id: id, gitUser: 'codewithz' })
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling Github API for user[" + username + "].....")
        const repos = ["repo1", "repo2", "repo3"]
        callback(repos)
    }, 3000)
}