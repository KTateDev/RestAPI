const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//middlewares
app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.use("/", (req, res) => {
  res.send("we are on home");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB")
);

app.listen(3000);
