'use strict';

function validator(req, res, next) {

    let validUserName = /^[a-zA-Z]+$/

    // if (req.query.name == "") { req.query.name = "user" };

    if (!validUserName.test(req.query.name)) {errorHandler()}

    // if (req.query.name == null) { errorHandler() };

    next();

}

module.exports = validator;