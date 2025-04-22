let fetchUser = new Promise((resolve, reject) => {
    let userFound = false;
  
    if (userFound) {
      resolve({ id: 1, name: "Aaditya" });
    } else {
      reject("No user found");
    }
  });
  
  fetchUser
    .then((data) => {
      console.log("User:", data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
  