var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all notes for patients
 */
router.get('/:id', (req, res) => {
	console.log(req.params.id)
	let id = req.params.id
	models.notes.findAll({
		where: {
		  patientID: id
		}
	  }).then(notes => {
		console.log(notes)
			res.json(notes);

	})
});


module.exports = router