import pool from '../config/database';
import bcrypt from 'bcryptjs';
import db from '../models/index.js';


const getAllUsers = async () => {
    let users = [];
    users = await db.User.findAll();
    return users;
}

const getUserById = async (idUser) => {
    let user = await db.User.findOne(
        {
            where: { id: idUser },
            attributes: ['username', 'password'],
            include: { model: db.Group, attributes: ['name'] },
            raw: true,
            nest: true
        });
    return user;
}

const updateUser = async ({ id, username, email, password }) => {
    await db.User.update(
        {
            username: username,
            email: email,
            password: password,

        },
        {
            where: {
                id: id,
            },
        },
    );
}

const createNewUser = async (username, password, email) => {
    const salt = bcrypt.genSaltSync(10);
    let hashPass = bcrypt.hashSync(password, salt);
    const user = await db.User.create(
        {
            username: username,
            email: email,
            password: hashPass
        }
    );
    return user;

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
    getAllUsers, createNewUser, removeUser, getUserById, updateUser
}

