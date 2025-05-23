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

        }, 3000)
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
        }, 2000)
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

async function doAll() {
    try {
        const loginResult = await login();
        console.log(loginResult);
        await accessAccount();
        await checkBalance();
        console.log("All done");
    } catch (error){
        console.log("Error: " + error);
    }
}

doAll();