require('dotenv').config();
import express from 'express';
import connfigViewEngine from './config/viewEngine';
import initRouter from './routes/web';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME;

//config virw engine
connfigViewEngine(app);

//init router
initRouter(app);


app.listen(port, () => {
    console.log(`Example app listening on port http://${host}:${port}`);
})
