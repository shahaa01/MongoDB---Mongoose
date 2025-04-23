const mongoose = require('mongoose');

//main().then(result => console.log(result)).catch(err => console.log(err));

try {
    await main();
    console.log("Sucessfully connected🚀 and all operations performed");
} catch (err) {
    console.log(err.message);
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/sarathi');
  console.log("Successful Connection🚀");

  //creating a schema
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        email: String
    }
);

//model - a toolbox by mongoose to create,edit,delete,update,read documents
const User = mongoose.model("User", userSchema);

try {
    await User.deleteMany({});
    console.log("everything deleted");
} catch(err) {
    console.log(err);
}

//to insert 1 document into the collection "users"
//_id will be created automatically which will be a PRIMARY KEY - UNIQUE and NOT NULL
const user1 = new User(
    {
        name: "Aaditya",
        age: 19,
        email: "aadityashah2074@gmail.com"
    }
);

await user1.save(); //this will save this document "user" in the database's collection

//to insert many documents - isn't used much because at a time we only register one user in
const users = User.insertMany(
    [
        {
            name: "Swechha",
            age: 29,
            email: "swchha@gmail.com"
        },
        {
            name: "Regmi",
            age: 10,
            email: "regmi@gmail.com"
        },
        {
            name: "Shah",
            age: 39,
            email: "aadishah@gmail.com"
        }   
    ]
).then(res => console.log(res)).catch(err => console.log(err)); //you don't need to save individually and this returns a promise

//model also has a similar find method but it returns a query object and not a promise but we can use then and catch methods
  
  


}









