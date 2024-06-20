import pool from '../config/database';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const getAllUsers = async () => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const createNewUser = async (username, password, email) => {

    let hashPass = bcrypt.hashSync(password, salt);
    try {
        const [rows, fields] = await pool.query(`INSERT INTO Users (username, password, email) VALUES(? , ? , ?) `, [username, hashPass, email]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllUsers, createNewUser
}

