new Promise((resolve, reject) => {
    resolve("Step 1 ✅");
  })
    .then((result1) => {
      console.log(result1); // Step 1 ✅
      return "Step 2 ✅";
    })
    .then((result2) => {
      console.log(result2); // Step 2 ✅
      return "Step 3 ✅";
    })
    .then((result3) => {
      console.log(result3); // Step 3 ✅
    });
  