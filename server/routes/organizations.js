var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all organizations
 */
router.get('/', (req, res) => {
	models.organization.findAll({
		order: ['id', 'ASC']
	}).then(organization => {
		if (organization && Object.keys(organization).length > 0)
			res.json({ success: true, organization });
		else
			res.status(400).json({ success: false, error: "Any organization found." });
	})
});

/**
 * Get organization by ID
 */
router.get('/:id', (req, res) => {
	let error = null;
	let id = req.params.id || null;

	if (!id) error = "Invalid request.";
	else if (Validator.isEmpty(id)) error = "Invalid request.";
	else if (!Validator.isInt(id)) error = "Value must be integer.";
	else if (id <= 0) error = "Invalid value.";

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.organization.findById(req.params.id).then(data => {
		if (data)
			res.json({ success: true, organization: data });
		else
			res.status(400).json({ success: false, error: "Organization not found.", organization: {} });
	})
});

/**
 * Insert new organization
 */
router.post('/', (req, res) => {
	console.log(req.body);
	let { Name, Address, City, State, Zip_Code, Email, Phone_Number } = req.body;
	models.organization
		.build({ Name, Address, City, State, Zip_Code, Email, Phone_Number })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update organization by ID
 */
router.put('/:id', (req, res) => {
	let { id, Name, Address, City, State, Zip_Code, Email } = req.body;
	models.organization
		.update({ Name, Address, City, State, Zip_Code, Email }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete organization by ID
 */
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	models.organization
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router