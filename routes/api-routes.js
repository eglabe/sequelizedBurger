var db = require("../models");

module.exports = function(app) {
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create(req.body).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.get("/api/nonDevouredBurgers", function(req, res) {
        db.Burger.findAll({
            where: {
                devoured: 0
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.get("/api/devouredBurgers", function(req, res) {
        db.Burger.findAll({
            where: {
                devoured: 1
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });
};