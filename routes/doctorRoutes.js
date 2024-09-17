// backend/routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Database connection

// Get all doctors
router.get('/', (req, res) => {
    const query = 'SELECT * FROM doctor_scores';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;
