var express = require("express");
var models = require("../models");

const router = express.Router();

/**
 * Get room by ID
 */
router.get('/:id', (req, res) => {
	let error = null;
	let id = req.params.id || null;

	if (!id) error = "Invalid request.";
	else if (Validator.isEmpty(id)) error = "Invalid request.";
	else if (!Validator.isInt(id)) error = "Value must be integer.";
	else if (id <= 0) error = "Invalid value.";

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.room.findById(req.params.id).then(data => {
		if (data)
			res.json({ success: true, room: data });
		else
			res.status(400).json({ success: false, error: "room not found.", room: {} });
	})
});

/**
 * Insert new room
 */
router.post('/createRoom', (req, res) => {
	console.log(req.body);
	let { Name, orgID } = req.body;
	models.room
		.build({ Name, orgID })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update room by ID
 */
router.put('/:id', (req, res) => {
	let { id, Name, orgID } = req.body;
	models.room
		.update({ Name, orgID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

//get available room list 
router.get('/', (req, res) => {
	models.room.findAll({ where: {Available: 1}       
	}).then(rooms => {
			res.json(rooms);

	})
});
// Update room to a Room and Update room availability 
router.put('/available/:id', (req, res) => {
	let { id, Available } = req.body;
	models.room
		.update({ Available }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete room by ID
 */
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	models.room
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router