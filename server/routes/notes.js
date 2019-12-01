var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all notes for patients
 */
router.get('/:id', (req, res) => {
	models.notes.findAll({        
	}).then(notes => {
		console.log(notes)
			res.json(notes);

	})
});


module.exports = router