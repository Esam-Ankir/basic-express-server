'use strict';

function validator(req, res, next) {

    let validUserName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/

    if (req.query.name == "") { req.query.name = "user" };

    if (!validUserName.test(req.query.name)) { req.query.name = "wrong Name" };

    if (req.query.name == null) { errorHandler() };

    next();

}

module.exports = validator;