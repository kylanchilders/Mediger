// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
// =================================================
var express = require("express");
var session = require ("express-session");
var models = require ("./models");
var bands = require ("./routes/api");
// Sets up the Express App
// ================================================
var app = express();
var PORT = process.env.PORT || 3010;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Middleware for errors
app.use((req, res) => {
	res.status(404).json({ errors: { global: "Still working on it. Please try again later when we implement it." } });
});

// Sync database with Sequelize models
models.sequelize.sync().then(function() {
	if (process.env.NODE_ENV !== "test") {
		console.log('Database connected!');
	}
}).catch(function(err) {
	console.error(err, "Something went wrong, database is not connected!");
});
// Routes // ========================================================
//require("./routes/API.js")(app);
//require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
