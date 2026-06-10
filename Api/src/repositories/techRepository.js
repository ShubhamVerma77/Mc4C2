const pool = require('../config/db');
const getAllUsers = async () => {
    const result = await pool.query(
        'select * from "Master"."MST_TECH"'
    );

    return result.rows;
};

module.exports = {
    getAllUsers,

};