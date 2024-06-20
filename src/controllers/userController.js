import { getAllUsers, createNewUser } from '../service/serviceUser';

const posts = async (req, res) => {
    const data = await getAllUsers();
    console.log(data);

    res.render('posts');
}

const userForm = (req, res) => {
    console.log(req.body);
    res.render('user');
}

const handleCreateUser = (req, res) => {
    const { username, email, password } = req.body;
    const result = createNewUser(username, password, email);

    res.send('user');
}

module.exports = {
    posts, userForm, handleCreateUser
}