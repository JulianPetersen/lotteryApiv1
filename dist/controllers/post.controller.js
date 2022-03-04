"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePost = exports.findPosByCategory = exports.findOnePost = exports.findAllPost = exports.deletePost = exports.createPost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _post = _interopRequireDefault(require("../models/post"));

var findAllPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _post["default"].find().sort({
              createdAt: 'desc'
            }).populate('usuario').populate('category');

          case 3:
            posts = _context.sent;
            res.json(posts);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || "algo ocurrio mal al recuperar Los posteos"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function findAllPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAllPost = findAllPost;

var createPost = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newPost, postSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log(req.file);
            newPost = new _post["default"]({
              description: req.body.description,
              socialLink: req.body.socialLink,
              usuario: req.userId,
              category: req.body.category,
              imgUrl: req.body.imgUrl
            });
            _context2.next = 5;
            return newPost.save();

          case 5:
            postSaved = _context2.sent;
            res.json(postSaved);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message || "algo ocurrio mal al Crear una tarea."
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function createPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createPost = createPost;

var findOnePost = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _post["default"].findById(req.params.id);

          case 3:
            post = _context3.sent;
            res.json(post);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0.message || "algo ocurrio mal al Buscar un posteo."
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function findOnePost(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findOnePost = findOnePost;

var deletePost = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _post["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.json({
              message: 'el posteo fue eliminado correctamente'
            });
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "algo ocurrio mal al eliminar la tarea"
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deletePost(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePost = deletePost;

var updatePost = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _updatePost;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _post["default"].findByIdAndUpdate(req.params.id, req.body);

          case 3:
            _updatePost = _context5.sent;
            res.json(_updatePost);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0.message || "algo ocurrio mal al Actualizar un Post."
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function updatePost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updatePost = updatePost;

var findPosByCategory = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var post;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _post["default"].find({
              category: req.params.categoryId
            }).populate('category').populate('usuario');

          case 3:
            post = _context6.sent;
            res.json(post);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json({
              message: _context6.t0.message || "algo ocurrio mal al Buscar un posteo."
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function findPosByCategory(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.findPosByCategory = findPosByCategory;