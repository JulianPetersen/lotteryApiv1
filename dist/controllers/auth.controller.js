"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.singUp = exports.singIn = exports.finduserById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var singUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, username, user, userName, newUser, filename, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password, username = _req$body.username;
            _context.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            user = _context.sent;
            _context.next = 6;
            return _User["default"].findOne({
              username: username
            });

          case 6:
            userName = _context.sent;

            if (user) {
              res.status(500).json({
                message: 'correo existente'
              });
            }

            if (!userName) {
              _context.next = 12;
              break;
            }

            res.status(500).json({
              message: 'usuario existente'
            });
            _context.next = 19;
            break;

          case 12:
            newUser = new _User["default"]({
              email: email,
              password: password,
              username: username
            });

            if (req.file) {
              filename = req.file.filename;
              newUser.setImgUrl(filename);
            }

            if (!req.file) {
              newUser.isNotImg();
            }

            _context.next = 17;
            return newUser.save();

          case 17:
            token = _jsonwebtoken["default"].sign({
              _id: newUser._id
            }, 'secretKey');
            res.status(200).json({
              token: token
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function singUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.singUp = singUp;

var singIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(401).send('el correo no existe'));

          case 6:
            if (!(user.password !== password)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(401).send('password incorrecto'));

          case 8:
            token = _jsonwebtoken["default"].sign({
              _id: user._id
            }, 'secretKey');
            res.status(200).json({
              usuario: {
                id: user._id
              },
              token: token
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function singIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //terminar el updater


exports.singIn = singIn;

var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var updatedUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            updatedUser = _context3.sent;
            res.json(updatedUser);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0.message || "algo ocurrio mal al Actualizar una tarea."
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var finduserById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _User["default"].findById(req.params.id);

          case 3:
            user = _context4.sent;
            res.json(user);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "algo ocurrio mal al Buscar un posteo."
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function finduserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.finduserById = finduserById;