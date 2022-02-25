"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _config = _interopRequireDefault(require("../config"));

var userSchema = new _mongoose.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  imgProfile: {
    type: String
  }
}, {
  timestamps: true
});

userSchema.methods.setImgUrl = function setImgUrl(filename) {
  this.imgProfile = "".concat(_config["default"].host, ":").concat(_config["default"].port, "/public/").concat(filename);
};

userSchema.methods.isNotImg = function isNotImg() {
  this.imgProfile = "".concat(_config["default"].host, ":").concat(_config["default"].port, "/public/", 'profileImg.png');
};

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;