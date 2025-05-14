function fun1(callback) {
    setTimeout(()=> {
        console.log("fun1");
        callback();
    }, 1000)
}

function fun2(callback) {
    setTimeout(()=> {
        console.log("fun2");
        callback();
    }, 1000)
}

function fun3(callback) {
    setTimeout(()=> {
        console.log("fun3");
        callback();
    }, 1000)
}

function fun4(callback) {
    setTimeout(()=> {
        console.log("fun4");
        callback();
    }, 1000)
}

function fun5(callback) {
    setTimeout(()=> {
        console.log("fun5");
        callback();
    }, 1000)
}


fun1(() => {
    fun2(() => {
        fun3(() => {
            fun4(() => {
                fun5(() => {
                    console.log("All functions executed");
                })
            })
        })
    })
})