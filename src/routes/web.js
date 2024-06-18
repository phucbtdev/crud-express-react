import express from 'express';
const router = express.Router();

const initRouter = (app) => {
    router.get('/', (req, res) => {
        return res.send('Welcome');
    })

    return app.use('/', router);
}

export default initRouter   