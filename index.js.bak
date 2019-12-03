// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
// =================================================
var express = require("express");
var session = require ("express-session");
var db = require ("./models");
var rooms = require ("./routes/rooms");
var patients = require ("./routes/patients");
var orgUsers = require ("./routes/orgUsers");
var organizations = require ("./routes/organizations");
var notes = require ("./routes/notes");

// Sets up the Express App
// ================================================
var app = express();
var PORT = process.env.PORT || 3010;

// Requiring our models for syncing


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
  });

  app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
   });


// Static directory
app.use(express.static("public"));

// Routes // ========================================================
app.use('/api/room/', rooms);
app.use('/api/patient/', patients);
app.use('/api/orgUser/', orgUsers);
app.use('/api/organization/', organizations);
app.use('/api/notes/', notes);


// Middleware for errors
app.use((req, res) => {
	res.status(404).json({ errors: { global: "Still working on it. Please try again later when we implement it." } });
});

// Sync database with Sequelize models
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	})
}).catch(function(err) {
	console.error(err, "Something went wrong, database is not connected!");
});
// Routes // ========================================================
//require("./routes/API.js")(app);
//require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
