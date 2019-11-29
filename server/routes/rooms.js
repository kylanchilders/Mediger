import express from 'express';
import models from '../models';

const router = express.Router();


/**
 * Get all room
 */
router.get('/room/', (req, res) => {
	models.room.findAll({        
		order: ['id', 'ASC']
	}).then(room => {
		if (room && Object.keys(room).length > 0)
			res.json({ success: true, room });
		else
			res.status(400).json({ success: false, error: "room found." });
	})
});

/**
 * Get room by ID
 */
router.get('/room/:id', (req, res) => {
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
router.post('/api/createRoom', (req, res) => {
	let { Name, OrgID } = req.body;
	models.room
		.build({ Name, OrgID })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update room by ID
 */
router.put('/room/:id', (req, res) => {
	let { id, Name, OrgID } = req.body;
	models.room
		.update({ Name, OrgID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});
// Update room to a Room and Update room availability 
router.put('/room/available/:id', (req, res) => {
	let { id, Available } = req.body;
	models.room
		.update({ Available }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete room by ID
 */
router.delete('/room/:id', (req, res) => {
	let id = req.params.id;
	models.room
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

export default router;