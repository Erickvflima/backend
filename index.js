const compression = require("compression");
const express = require("express");
const cors = require("cors");
const path = require("path");
const Router = require("./src/routes/routes.route");
const bodyParser = require("body-parser");
const port = 3003;

const app = express();
app.use(cors());

const fs = require("fs");
// const https = require('https');
const http = require("http");

const options = {
  key: fs.readFileSync("certified/private.key"),
  cert: fs.readFileSync("certified/certificate.crt"),
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Router);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(compression());
app.disable("x-powered-by");

http.createServer(app).listen(port, function () {
  console.log("Server is running " + port);
});
