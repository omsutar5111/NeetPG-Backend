
// backend/models/doctorModel.js
const db = require('../config/db');

const Doctor = {
    getAllDoctors: (callback) => {
        const sql = 'SELECT * FROM doctor_scores';
        db.query(sql, callback);
    },
    // Add more methods as needed, e.g., addDoctor, updateDoctor, deleteDoctor
};

module.exports = Doctor;
