var express = require("express");
var models = require("../models");

const router = express.Router();


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

router.get('/room', (req, res) => {
	models.sequelize.query(
		'SELECT distinct `rooms`.id as id, `rooms`.name, `patients`.id as patientid, `patients`.First_Name,`patients`.Last_Name FROM `rooms` LEFT JOIN `patients` on rooms.id = patients.roomID',{type: models.Sequelize.QueryTypes.SELECT}
		).then(patient => {
			console.log(patient)
			res.json(patient);
	
		});
	})
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
router.put('/', (req, res) => {
	let { id, Available } = req.body;
	console.log(req.body);
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