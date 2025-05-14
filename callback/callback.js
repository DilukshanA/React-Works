function openFile(callback){

    // setTimeout is asynchronous inbuilt function
    setTimeout(
        () => {
            console.log("File opened");
            callback();
        } ,
        3000
    );
}

function addSomthing(){
    console.log("Added something");
}

function removeSomething(){
    console.log("Removed something");
}

openFile(addSomthing);
openFile(removeSomething);