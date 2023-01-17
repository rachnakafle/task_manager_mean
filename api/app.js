const express = require("express");
const app = express();

/* ROUTE HANDLERS */

/* LIST ROUTES */

/***
 * GET/lists
 * Purpose: Get all lists
 */

app.get("/lists", (req, res) => {
  //We want to return an array of all the lists in the database
  res.send("Hello World!!");
});

/***
 * POST/lists
 * Purpose: Create a list
 */

app.post("/lists", (req, res) => {
  // We want to create a new list and return the new list documnet back to the user (which includes the id) 
  //The list infrmation (fields will be passed in via the JSON )


});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
