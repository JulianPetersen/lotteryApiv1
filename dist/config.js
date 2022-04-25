"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  //desarrollo:
  mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/lotteryapi',
  //produccion:
  //mongodbURL: process.env.APP_ROMOTE_HOST || 'mongodb://localhost/lotteryapi',
  port: process.env.APP_PORT || '3000',
  host: process.env.APP_HOST || 'http://localhost'
};
exports["default"] = _default;