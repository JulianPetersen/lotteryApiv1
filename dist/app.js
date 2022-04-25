"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _post = _interopRequireDefault(require("./routes/post.routes"));

var _category = _interopRequireDefault(require("./routes/category.routes"));

var _igcomment = _interopRequireDefault(require("./routes/igcomment.routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 3000); //middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //static files

app.use('/public', _express["default"]["static"]("".concat(__dirname, "/storage/imgs")));
console.log("".concat(__dirname, "/storage/imgs")); //routes

app.get('/', function (req, res) {
  res.json({
    message: 'Bienvenidos a sorteando Apiv2'
  });
});
app.use('/api/auth', _auth["default"]);
app.use('/api/post', _post["default"]);
app.use('/api/category', _category["default"]);
app.use('/api/instagramcomment', _igcomment["default"]);
var _default = app;
exports["default"] = _default;