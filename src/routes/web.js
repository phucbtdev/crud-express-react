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
    router.get('/', userController.userForm);
    router.get('/edit/:id', userController.getPageUpdateUser);

    router.post('/remove-user/:id', userController.handleRemoveUser);
    router.post('/user-create', userController.handleCreateUser);
    router.post('/update', userController.handleUpdateUser);

    return app.use('/user', router);
}



module.exports = { initRouter, userRouter }  