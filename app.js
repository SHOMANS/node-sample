const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogsRoute = require("./routes/blogs");
require("dotenv/config");


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/blogs", blogsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
