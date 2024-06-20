import express from 'express';
const router = express.Router();

import homeController from '../controllers/homeController'
import userController from '../controllers/userController'

const initRouter = (app) => {
    router.get('/', homeController.home);
    router.get('/about', homeController.about)

    return app.use('/', router);
}

const userRouter = (app) => {
    router.get('/', userController.posts);
    router.get('/form-add', userController.userForm);

    router.post('/user-create', userController.handleCreateUser)
    return app.use('/user', router);
}



module.exports = { initRouter, userRouter }  