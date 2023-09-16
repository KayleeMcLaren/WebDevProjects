import inquirer from "inquirer"; //Must be installed
import qr from "qr-image"; //Must be installed
import fs from "fs"; // Native node module 

inquirer
// Gets URL from user to be turned into a QR code
  .prompt([
    {
      message: "Type in your URL: ", 
      name: "URL", // Defines a name to use when storing the URL
    },
  ])

  //Creates the QR code 
  .then((answers) => { // Answers (object) contains the values of message and name 
    const url = answers.URL;
    var qr_svg = qr.image(url); // .image turns text into an image - in this case a QR code
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); //Writes the QR code into the file - qr_img.png

    fs.writeFile("URL.txt", url, (err) => { // Creates a text file containing the URL
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })

  // Error handling
  .catch((error) => { 
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
