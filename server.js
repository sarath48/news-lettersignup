const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello Sarath</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello i am Sarath i am a front end engineer</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello you can contact me on sarath@google.com</h1>");
});

app.get("/calculate", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("The result is" + (Number(req.body.num1) + Number(req.body.num2)));
});

app.listen("3000", () => {
  console.log("server is started and listening on port 3000");
});
