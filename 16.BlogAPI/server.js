import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";  // Stores the URL of the API that the backend server will be communicating with

app.use(express.static("public"));  // Tells Express to serve static files from the public directory

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to render the main page
// Handles GET requests to the / endpoint. 
// It uses the Axios library to make a GET request to the /posts endpoint of the API. 
// If the request is successful, the route handler renders the index.ejs template and passes in the posts that were returned from the API 
// If the request fails, the route handler returns a 500 Internal Server Error status code
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response);
    res.render("index.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// Route to render the edit page
// handles GET requests to the /new endpoint. 
// It renders the modify.ejs template with the heading "New Post" and the submit button text "Create Post"
app.get("/new", (req, res) => {
  res.render("modify.ejs", { heading: "New Post", submit: "Create Post" });
});

// Handles GET requests to the /edit/:id endpoint, where :id is a placeholder for the post ID 
// It uses the Axios library to make a GET request to the /posts/:id endpoint of the API
// If the request is successful, the route handler renders the modify.ejs template and passes in the post that was returned from the API
// If the request fails, the route handler returns a 500 Internal Server Error status code
app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
    console.log(response.data);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Update Post",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
});

// Create a new post
// handles POST requests to the /api/posts endpoint. 
// It uses the Axios library to make a POST request to the /posts endpoint of the API, passing in the request body as the payload
// If the request is successful, the route handler redirects the user to the main page (/) 
// If the request fails, the route handler returns a 500 Internal Server
app.post("/api/posts", async (req, res) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, req.body);
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
});

// Partially update a post
// Uses the Axios library to make a PATCH request to the /posts/:id endpoint of the API, passing in the request body as the payload
// If the request is successful, the route handler redirects the user to the main page (/) 
// If the request fails, the route handler returns a 500 Internal Server Error status code
app.post("/api/posts/:id", async (req, res) => {
  console.log("called");
  try {
    const response = await axios.patch(
      `${API_URL}/posts/${req.params.id}`,
      req.body
    );
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

// Delete a post
// uses the Axios library to make a DELETE request to the /posts/:id endpoint of the API
// If the request is successful, the route handler redirects the user to the main page (/) 
//If the request fails, the route handler returns a 500 Internal Server Error status code
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/posts/${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

// Starts the Express app on the specified port
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
