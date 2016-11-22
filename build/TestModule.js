'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestModule = function () {
  function TestModule() {
    (0, _classCallCheck3.default)(this, TestModule);

    this.test = 'test';
  }

  (0, _createClass3.default)(TestModule, null, [{
    key: 'logTest',
    value: function logTest(content) {
      window.console.log(content);
    }
  }]);
  return TestModule;
}();

exports.default = TestModule;
module.exports = exports['default'];