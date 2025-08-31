const School = require('../models/schoolModel');

exports.createSchool = (req, res) => {
  const schoolData = {
    ...req.body,
    image: req.file ? `/schoolImages/${req.file.filename}` : null
  };

  School.create(schoolData, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'School created successfully', id: results.insertId });
  });
};

exports.getSchools = (req, res) => {
  School.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};