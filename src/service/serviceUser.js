import pool from '../config/database';
import bcrypt from 'bcryptjs';


const getAllUsers = async () => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const createNewUser = async (username, password, email) => {
    const salt = bcrypt.genSaltSync(10);
    let hashPass = bcrypt.hashSync(password, salt);
    try {
        const [rows, fields] = await pool.query(`INSERT INTO Users (username, password, email) VALUES(? , ? , ?) `, [username, hashPass, email]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const removeUser = async (id) => {
    try {
        const [rows, fields] = await pool.query(`DELETE FROM Users WHERE id = ?`, [id]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    getAllUsers, createNewUser, removeUser
}

