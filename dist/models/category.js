"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var categorySchema = new _mongoose.Schema({
  name: {
    type: String,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

var _default = (0, _mongoose.model)('Category', categorySchema);

exports["default"] = _default;