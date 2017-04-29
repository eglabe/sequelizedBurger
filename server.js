// Dependensies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets port
const PORT = process.env.PORT || 8080;

// Initializes express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// ?
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Requires handlesbars
var exphbs = require("express-handlebars");
// Sets express engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Links with burgers controller file
var routes = require("./controllers/burgersController.js");

// ?
app.use("/", routes);

// Tells express to listen at the given port number
app.listen(PORT);