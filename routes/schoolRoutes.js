const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const upload = require('../controllers/uploadController');

router.post('/', upload.single('image'), schoolController.createSchool);
router.get('/', schoolController.getSchools);

module.exports = router;