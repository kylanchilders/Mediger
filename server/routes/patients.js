var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all patient
 */
router.get('/', (req, res) => {
	models.patient.findAll({        
	}).then(patient => {
			res.json(patient);

	})
});

/**
 * Get patient by ID
 */

router.get('/:id', (req, res) => {
	console.log(req.params.id);
	console.log("hello");
	let id = req.params.id
	models.patient.findAll({
		where: {
		  id: id
		}
	  }).then(data => {
		console.log(data)
			res.json(data);

	})
});

/**
 * Insert new patient
 */
router.post('/', (req, res) => {
	console.log(req.body)
	let { First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, Phone_Number, orgID } = req.body;
	models.patient
		.build({ First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, Phone_Number, orgID })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update patient by ID
 */
router.put('/:id', (req, res) => {
	let { id, First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID } = req.body;
	models.patient
		.update({ First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});
// Update Patient to a Room and Update room availability 
router.put('/room/:id', (req, res) => {
	let { id, roomID } = req.body;
	models.patient
		.update({ roomID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete patient by ID
 */
router.delete('/:id', (req, res) => {
	console.log(req)
	let id = req.params.id;
	models.patient
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router