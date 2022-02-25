"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _config = _interopRequireDefault(require("../config"));

var postSchema = new _mongoose.Schema({
  imgUrl: {
    type: String,
    trim: true
  },
  description: {
    type: String
  },
  socialLink: {
    type: String
  },
  usuario: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  versionKey: false,
  timestamps: true
});

postSchema.methods.setImgUrl = function setImgUrl(filename) {
  this.imgUrl = "".concat(_config["default"].host, ":").concat(_config["default"].port, "/public/").concat(filename);
};

var _default = (0, _mongoose.model)('Post', postSchema);

exports["default"] = _default;