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

router.delete('/:id', (req, res) => {
	console.log(req)
	let id = req.params.id;
	models.notes
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

router.post('/:id', (req, res) => {
	console.log(req.params.id);
	let {Note, Date, userID, patientID} = req.body;
	models.notes
		.build({Note, Date, userID, patientID} )
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});


module.exports = router