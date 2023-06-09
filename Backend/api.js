const dboperations = require("./dboperations");
var Db = require("./dboperations");
var listSensor = require("./listSensor");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
  ("");
});

router.route("/listSensor").get((request, response) => {
  dboperations.getSensor().then((result) => {
    response.json(result[0]);
  });
});

router.route("/selectSensor/:companyID").get((request, response) => {
  dboperations.selectSensor(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/addSensor").post((request, response) => {
  let listSensor = { ...request.body };
  dboperations.addSensor(listSensor).then((result) => {
    response.status(201).json(result);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Order API is running at " + port);