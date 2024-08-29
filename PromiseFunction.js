let a = new Promise((resolve, reject) => {
    let a = 2 + 5
    if (a == 5) {
        resolve("Success")
    } else {
        reject("Not correct")
    }
})

a.then((message) => {
    console.log("This is inside resolve")
}).catch((message) => {
    console.log("This is inside reject")
})

setTimeout(function() {
    console.log("\nNext Promise->\n");
}, 1000)

let PromiseObject = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("This is after 2 seconds. This is will execute first then then() will execute after that.")
        resolve()
    }, 2000)
})

PromiseObject.then(function() {
    console.log("Done")
}).catch(function() {
    console.log("Error")
})

setTimeout(function() {
    console.log("\nNext Promise->\n");
}, 2000)

let anotherPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ Username: "Chandra Sekhar Dutta", EmailId: "chandrasekhardutta3@gmail.com" })
    }, 3000)
}).then(function(User) {
    console.log(User);
}).catch(function(User) {
    console.log("No data");
})

let PromiseObject4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // Change this to true to test the reject case
        if (!error) {
            resolve({ Username: "Chandra Sekhar Dutta", EmailId: "chandrasekhardutta3@gmail.com" });
        } else {
            reject("Error: Not responding");
        }
    }, 4000);
});

PromiseObject4
    .then(function(user) {
        console.log(user);
        return user.Username;
    })
    .then(function(username) {
        console.log(username);
    })
    .catch(function(error) {
        console.log("Error has occurred:", error);
    })
    .finally(() => {
        console.log("Everything done")
    })