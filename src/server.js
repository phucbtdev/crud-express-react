require('dotenv').config();
import express from 'express';
import connfigViewEngine from './config/viewEngine';
import { initRouter, userRouter } from './routes/web';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST_NAME;

//config bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//config virw engine
connfigViewEngine(app);

//init router
userRouter(app);
initRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://${host}:${port}`);
})
