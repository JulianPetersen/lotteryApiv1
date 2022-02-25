"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Image = new _mongoose.Schema({
  fileName: {
    type: String
  },
  fileUrl: {
    type: String
  }
});

var _default = (0, _mongoose.model)('Image', Image);

exports["default"] = _default;