function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const login = true;
            if(login){
                console.log("Logged in");
                resolve("Login successful");
            } else {
                console.log("Login failed");
                reject("Login failed");
            }

        }, 1000)
    })
}

function accessAccount() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const access = true;
            if(access){
                console.log("Accessing account");
                resolve("Account accessed");
            } else{
                console.log("Access denied");
                reject("Access denied");
            }
        }, 1000)
    })
}

function checkBalance() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const balance = 1000;
            if(balance >= 0){
                console.log("Checking balance");
                resolve("Balance is: " + balance);
            } else{
                console.log("Insufficient funds");
                reject("Insufficient funds");
            }
        }, 1000)
    })
}

login().then((message) => {
    console.log(message);
    return accessAccount();
})
.then((message) => {
    console.log(message);
    return checkBalance();
})
.then(() => {
    console.log("All done");
}).catch((error) => {
    console.log("Error: " + error);
})