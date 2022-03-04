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
  this.imgProfile = "https://firebasestorage.googleapis.com/v0/b/lotteryapp-7d8e0.appspot.com/o/Usuarios%2FprofileImg.png?alt=media&token=e28f1155-ea1a-406d-a628-677f65ac0232";
};

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;