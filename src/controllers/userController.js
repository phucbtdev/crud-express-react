import { getAllUsers, createNewUser, removeUser, getUserById, updateUser } from '../service/serviceUser';

const posts = (req, res) => {
    res.render('posts');
}

const userForm = async (req, res) => {
    const data = await getAllUsers();
    res.render('user', { data });
}

const getPageUpdateUser = async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);
    res.render('edit', { user });
}

const handleCreateUser = (req, res) => {
    const { username, email, password } = req.body;
    const result = createNewUser(username, password, email);

    res.redirect('/user');
}

const handleUpdateUser = async (req, res) => {
    const { ...data } = req.body;
    await updateUser(data);

    res.redirect('/user');
}


const handleRemoveUser = async (req, res) => {
    const id = req.params.id;
    await removeUser(id);

    res.redirect('/user')
}

module.exports = {
    posts, userForm, handleCreateUser, handleRemoveUser, getPageUpdateUser, handleUpdateUser
}