const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Sports");
mongoose.Promise = global.Promise;
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api", require("./routes/api"));
app.use((err, req, res, next) => {
  res.status(422), res.send({ error: err.message });
});


app.listen(5000, () => {
  console.log("app started");
});

//"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db"
