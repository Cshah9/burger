var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));

// Static directory
app.use(express.static("./public"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.use("/", routes);


app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
