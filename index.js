const mongoose = require('mongoose');

(async function () {
  try {
    await main();
    console.log("Successfully connected and all operations performed");
  } catch (err) {
    console.error("Outer error:", err.message);
  }
})();

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/sarathi');
  console.log("🚀 Connected to DB");

  const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlenngth}
  });

  const User = mongoose.model("User", userSchema);

  try {
    await User.deleteMany({});
    console.log("🧹 Users deleted");

    const user1 = new User({
      name: "Aaditya",
      age: 19,
      email: "aadityashah2074@gmail.com"
    });
    await user1.save();

    await User.insertMany([
      { name: "Swechha", age: 29, email: "swchha@gmail.com" },
      { name: "Regmi", age: 10, email: "regmi@gmail.com" },
      { name: "Shah", age: 39, email: "aadishah@gmail.com" }
    ]);
    console.log("📦 Users inserted");

    const offerUsers = await User.find({ age: { $gt: 16 } }, { email: 1, age: 1 });
    console.log("Offer users:", offerUsers);

    await User.updateMany({age: {$gte: 18}}, {isEligible: true});
    /**
     * If you try to write a field that isn’t defined in the 
     * schema, Mongoose will ignore it silently during .save() 
     * or .update().

     */
    //User.find is an async function so you will have to await and then print it
    console.log(await User.find({}));
  } catch (err) {
    console.error("Error is: " + err.message); //the error will be handled here and the outer catch will not handle it
    //if you want the outer catch to handle it, you can throw the error from here - throw err;
  }

  //schema validations
  //min,max,enums,custom error messages, accessing those custom messages directly - refer to notes
}
