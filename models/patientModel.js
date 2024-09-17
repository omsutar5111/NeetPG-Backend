

// backend/models/patientModel.js
const db = require('../config/db');

const Patient = {
    getAllPatients: (callback) => {
        const sql = 'SELECT * FROM patients';
        db.query(sql, callback);
    },
    // Add more methods as needed, e.g., addPatient, updatePatient, deletePatient
};

module.exports = Patient;
