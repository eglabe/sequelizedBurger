var express = require("express");

var router = express.Router();

// require burger.js
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne(req.body.burgerName, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var id = req.params.id;
    burger.updateOne(id, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;