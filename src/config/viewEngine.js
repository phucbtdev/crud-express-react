const path = require('path');
import express from 'express';

const connfigViewEngine = (app) => {
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.set('views', path.join('./src', 'views'));
}

export default connfigViewEngine