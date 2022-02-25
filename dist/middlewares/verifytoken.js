"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var verifyToken = function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('no tienes acceso a este sitio');
  }

  var token = req.headers.authorization.split(' ')[1];

  if (token === 'null') {
    return res.status(401).send('no tienes acceso a este sitio');
  }

  var payload = _jsonwebtoken["default"].verify(token, 'secretKey');

  req.userId = payload._id;
  next();
};

exports.verifyToken = verifyToken;