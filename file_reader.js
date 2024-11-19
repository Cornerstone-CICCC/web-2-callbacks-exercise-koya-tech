const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstName) => {
  // your code here
  if (err) {
    console.log(err);
  } else {
    // console.log(data1);
    fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data2);
        fs.readFile("./age.txt", "utf-8", (err, age) => {
          if (err) {
            console.log(err);
          } else {
            // console.log(data3);
            fs.readFile("./hobbies.txt", "utf-8", (err, hobbies) => {
              if (err) {
                console.log(err);
              } else {
                hobbies = JSON.parse(hobbies);
                // console.log(data4);
                console.log(firstName + " " + lastname + " " + " is " + age + " years old and his hoobies are " + hobbies[0] + " and " + hobbies[1] + ".");
              }
            });
          }
        });
      }
    });
  }
})