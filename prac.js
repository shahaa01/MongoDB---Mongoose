let internetConnection = Math.floor(Math.random() * 6);

let prom = new Promise((resolve, reject) => {
    console.log("Inside promise")
    setTimeout(() => {
        if(internetConnection > 2) {
            console.log("Hii"); //some tasks here
            resolve("Connection successful"); //resolved 
        }
        else {
            reject("Failed slow internet");
        }
    },2000);

});

//handling the promise
// prom.then(results => console.log(`Your result is: ${results}`))
//     .catch (err => console.log(`Error caught: ${err}`));


//lets try this same using async/await

async function saveToDb() {
    try {
        let result = await prom;
        console.log(`Your result is: ${result}`);
    } catch(err) {
        console.log("caught: ", err);
    }
}

saveToDb();

function letsDo (name) {
    for(let i = 0; i < 1000000; i++) {
        console.log(name, i);
    }
}

letsDo("Aaditya Loves Swechha a lot🥺❤️");