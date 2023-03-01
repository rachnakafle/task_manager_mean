const express = require("express");
const app = express();
const List = require("./db/models/list.model");

const { mongoose } = require("./db/mongoose");

const bodyParser = require("body-parser");

//Load in the mongoose models
// const {List} = require('./db/models');

//Load middleware
app.use(bodyParser.json());

/* ROUTE HANDLERS */

/* LIST ROUTES */

/***
 * GET/lists
 * Purpose: Get all lists
 */

app.get("/lists", (req, res) => {
  //We want to return an array of all the lists in the database
  // res.send("Hello World!!");

  // List.find({req}).then((lists) => {
  //   res.send(lists);
  // });
});

/***
 * POST/lists
 * Purpose: Create a list
 */

app.post("/lists", (req, res) => {
  // We want to create a new list and return the new list documnet back to the user (which includes the id)
  //The list infrmation (fields will be passed in via the JSON )
  let title = req.body.title;

  let newList = new List({
    title,
  });
  newList.save().then((listDoc) => {
    //the full list document is returned (incl. id)

    res.send(listDoc);
  });
});

/***
 * Path /lists/:id
 * Purpose: update a specified list
 */

app.patch("/lists/:id", () => {
  //We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
});

/***
 * Path /lists/:id
 * Purpose: Delete a list
 */

app.delete("/lists/:id", () => {
  //We want to delete the specified list (document with id in the URL)
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
