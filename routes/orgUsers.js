var express = require("express");
var models = require("../models");

const router = express.Router();


/**
 * Get all orgUsers
 */
router.get('/', (req, res) => {
	models.orgUsers.findAll({
            where:{ orgID  } ,        
		order: ['id', 'ASC']
	}).then(orgUsers => {
		if (orgUsers && Object.keys(orgUsers).length > 0)
			res.json({ success: true, orgUsers });
		else
			res.status(400).json({ success: false, error: "Any orgUsers found." });
	})
});

/**
 * Get orgUsers by ID
 */
router.get('/:id', (req, res) => {
	let error = null;
	let id = req.params.id || null;

	if (!id) error = "Invalid request.";
	else if (Validator.isEmpty(id)) error = "Invalid request.";
	else if (!Validator.isInt(id)) error = "Value must be integer.";
	else if (id <= 0) error = "Invalid value.";

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.orgUsers.findById(req.params.id).then(data => {
		if (data)
			res.json({ success: true, orgUsers: data });
		else
			res.status(400).json({ success: false, error: "orgUsers not found.", orgUsers: {} });
	})
});

/**
 * Insert new orgUsers
 */
router.post('/', (req, res) => {
	let { Role, First_Name, Last_Name, username, password, Email, orgID } = req.body;
	models.orgUsers
		.build({ Role, First_Name, Last_Name, username, password, Email, orgID })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update orgUsers by ID
 */
router.put('/:id', (req, res) => {
	let { id, Role, First_Name, Last_Name, username, password, Email, orgID } = req.body;
	models.orgUsers
		.update({ Role, First_Name, Last_Name, username, password, Email, orgID }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Oops, something wrong happened.." } }));
});

/**
 * Delete orgUsers by ID
 */
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	models.orgUsers
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router