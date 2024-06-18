import express from 'express';

/*

*/
const connfigViewEngine = (app) => {
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.set('views', './views');

}

export default connfigViewEngine