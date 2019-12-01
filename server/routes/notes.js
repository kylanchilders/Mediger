var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all notes for patients
 */
router.get('/:id', (req, res) => {
    let id = req.params.id
	models.notes.findAll({where: { id }       
	}).then(notes => {
		console.log(notes)
			res.json(notes);

	})
});


module.exports = router