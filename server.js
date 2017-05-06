// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets port
const PORT = process.env.PORT || 8080;

// Initializes express
var app = express();

// Requiring models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// ?
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Requires handlebars
var exphbs = require("express-handlebars");
// Sets express engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Links with burgers controller file
var routes = require("./controllers/burgersController.js");

// ?
app.use("/", routes);

// Syncing sequelize models and then starting express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});