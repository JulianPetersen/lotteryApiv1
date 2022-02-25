"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _multer = _interopRequireDefault(require("multer"));

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './src/storage/imgs');
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
module.exports = upload;