import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Creates an Express application and assigns it to the app variable
// Also sets the port number that the application will listen on
const app = express();
const port = 3000;

// Declares a global variable called userIsAuthorised and sets it to false 
// Will be used to track whether the user is logged in
var userIsAuthorised = false;

// Tells Express to use the bodyParser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Checks if the user enters the correct password
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next(); // The next function determines when to move on from the middleware and continue to the handlers
}
// This function is registered as middleware using the app.use() method 
// This means that it will be called for every incoming request
app.use(passwordCheck); 

// This route handler handles GET requests to the root URL (/). It sends the index.html file to the client
app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

// Checks if the user is logged in (i.e., if the userIsAuthorised variable is set to true)
app.post("/check", (req, res) => {
  // If the user logs in with the correct password
  if (userIsAuthorised) {
    res.sendFile(__dirname + "secret.html"); // The secrets are dispalyed
  } else {
    res.sendFile(__dirname + "index.html"); // Otherwise, the index.html file is sent to the client
  }
});

// Starts the Express application on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
