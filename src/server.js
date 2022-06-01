'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');

const app = express();

app.use(logger);


app.get("/", (req, res) => {
    res.status(200).send('hello ');
});

app.get("/person", validator, (req, res) => {
    res.send({ name: req.query.name })

})

app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(404).send(result);
});


app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}