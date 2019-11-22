import express from 'express';
import models from '../models';

const router = express.Router();


/**
 * Get all patient
 */
router.get('/patient/', (req, res) => {
	models.patient.findAll({        
		order: ['id', 'ASC']
	}).then(patient => {
		if (patient && Object.keys(patient).length > 0)
			res.json({ success: true, patient });
		else
			res.status(400).json({ success: false, error: "Patient found." });
	})
});

/**
 * Get patient by ID
 */
router.get('/patient/:name', (req, res) => {
	let error = null;
	let id = req.params.name || null;

	if (!id) error = "Invalid request.";
	else if (Validator.isEmpty(id)) error = "Invalid request.";
	else if (!Validator.isInt(id)) error = "Value must be integer.";
	else if (id <= 0) error = "Invalid value.";

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.patient.findById(req.params.name).then(data => {
		if (data)
			res.json({ success: true, patient: data });
		else
			res.status(400).json({ success: false, error: "patient not found.", patient: {} });
	})
});

/**
 * Insert new patient
 */
router.post('/patient/', (req, res) => {
	let { First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID } = req.body;
	models.patient
		.build({ First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update patient by ID
 */
router.put('/patient/:id', (req, res) => {
	let { id, First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID } = req.body;
	models.patient
		.update({ First_Name, Last_Name, Date_Of_Birth, Address, City, State, Zip_Code, Email, OrgID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});
// Update Patient to a Room and Update room availability 
router.put('/patient/room/:id', (req, res) => {
	let { id, roomID } = req.body;
	models.patient
		.update({ roomID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete patient by ID
 */
router.delete('/patient/:id', (req, res) => {
	let id = req.params.id;
	models.patient
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

export default router;