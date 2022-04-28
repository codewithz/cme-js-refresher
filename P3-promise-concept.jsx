const p = new Promise((resolve, reject) => {
    //Kick off some async task

    setTimeout(() => {
        console.log("Some Async work.....")
        // resolve(1)
        reject(new Error("Promise Failed"))
    }, 3000)
});


p
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })