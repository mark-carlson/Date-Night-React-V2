"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api_v = require("./api_v1");

var _api_v2 = _interopRequireDefault(_api_v);

var _page = require("./page");

var _page2 = _interopRequireDefault(_page);

var _signin = require("./signin");

var _signin2 = _interopRequireDefault(_signin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  api_v1: _api_v2.default,
  signin: _signin2.default,
  page: _page2.default
}; /**
    *
    * Entry point for all routes
    *
    */
//# sourceMappingURL=index.js.map