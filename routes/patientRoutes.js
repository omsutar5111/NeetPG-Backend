// backend/routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Database connection

// Get all patients
router.get('/', (req, res) => {
    const query = 'SELECT * FROM patients';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get a patient by ID
router.get('/:id', (req, res) => {
    const patientId = req.params.id;

    // Query the database to get the patient by ID
    const query = 'SELECT * FROM patients WHERE sr_no = ?';
    db.query(query, [patientId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(results[0]);
    });
});

module.exports = router;
