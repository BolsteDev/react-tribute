'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BasicTributeExample = require('./examples/BasicTributeExample');

var _BasicTributeExample2 = _interopRequireDefault(_BasicTributeExample);

var _ControlledTributeExample = require('./examples/ControlledTributeExample');

var _ControlledTributeExample2 = _interopRequireDefault(_ControlledTributeExample);

var _CustomTributeExample = require('./examples/CustomTributeExample');

var _CustomTributeExample2 = _interopRequireDefault(_CustomTributeExample);

var _RefTributeExample = require('./examples/RefTributeExample');

var _RefTributeExample2 = _interopRequireDefault(_RefTributeExample);

var _DynamicDataTributeExample = require('./examples/DynamicDataTributeExample');

var _DynamicDataTributeExample2 = _interopRequireDefault(_DynamicDataTributeExample);

var _PromiseDataTributeExample = require('./examples/PromiseDataTributeExample');

var _PromiseDataTributeExample2 = _interopRequireDefault(_PromiseDataTributeExample);

var _Tribute = require('../src/Tribute');

var _Tribute2 = _interopRequireDefault(_Tribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Loading Tribute Examples');

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'render',
    value: function () {
      function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'large-12 columns' },
              _react2['default'].createElement(
                'h1',
                null,
                'Tribute Demo'
              )
            )
          ),
          _react2['default'].createElement(_BasicTributeExample2['default'], null),
          _react2['default'].createElement(_ControlledTributeExample2['default'], null),
          _react2['default'].createElement(_CustomTributeExample2['default'], null),
          _react2['default'].createElement(_RefTributeExample2['default'], null),
          _react2['default'].createElement(_DynamicDataTributeExample2['default'], null),
          _react2['default'].createElement(_PromiseDataTributeExample2['default'], null)
        );
      }

      return render;
    }()
  }]);

  return Example;
}(_react.Component);

_reactDom2['default'].render(_react2['default'].createElement(Example, null), document.getElementById('render'));
