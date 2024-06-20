import { getAllUsers, createNewUser, removeUser } from '../service/serviceUser';

const posts = (req, res) => {
    res.render('posts');
}

const userForm = async (req, res) => {
    const data = await getAllUsers();
    res.render('user', { data });
}

const handleCreateUser = (req, res) => {
    const { username, email, password } = req.body;
    const result = createNewUser(username, password, email);

    res.redirect('/user')
}

const handleRemoveUser = async (req, res) => {
    const id = req.params.id;
    await removeUser(id)

    res.redirect('/user')
}

module.exports = {
    posts, userForm, handleCreateUser, handleRemoveUser
}