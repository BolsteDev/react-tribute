'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tributejs = require('tributejs');

var _tributejs2 = _interopRequireDefault(_tributejs);

var _deepequal = require('deepequal');

var _deepequal2 = _interopRequireDefault(_deepequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayOf = _react.PropTypes.arrayOf,
    func = _react.PropTypes.func,
    node = _react.PropTypes.node,
    object = _react.PropTypes.object,
    shape = _react.PropTypes.shape;

var Tribute = function (_Component) {
  _inherits(Tribute, _Component);

  function Tribute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tribute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tribute.__proto__ || Object.getPrototypeOf(Tribute)).call.apply(_ref, [this].concat(args))), _this), _this.children = [], _this.listeners = [], _this.tribute = null, _this.bindToChildren = function () {
      var _this$props = _this.props,
          customRef = _this$props.customRef,
          options = _this$props.options;


      (customRef ? [customRef()] : _this.children).forEach(function (child) {
        var node = _reactDom2['default'].findDOMNode(child);

        var t = new _tributejs2['default'](_extends({}, options));

        t.attach(node);

        _this.tribute = t;

        var listener = _this.handleTributeReplaced.bind(_this);
        node.addEventListener('tribute-replaced', listener);
        _this.listeners.push(listener);
      });
    }, _this.handleTributeReplaced = function (event) {
      _this.props.onChange(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tribute, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.bindToChildren();
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate() {
        var _this2 = this;

        if (this.tribute) {
          // TODO handle the case where other options have changed

          if (this.props.options.values) {
            this.tribute.append(0, this.props.options.values, true /* replace */);
          } else if (this.props.options.collections) {
            this.props.options.collections.forEach(function (collection, index) {
              _this2.tribute.append(index, collection, true /* replace */);
            });
          }
        } else {
          this.bindToChildren();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'shouldComponentUdpdate',
    value: function () {
      function shouldComponentUdpdate(nextProps) {
        return !(0, _deepequal2['default'])(nextProps, this.props);
      }

      return shouldComponentUdpdate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this3 = this;

        var _props = this.props,
            children = _props.children,
            _ = _props.options,
            __ = _props.customRef,
            ___ = _props.onChange,
            props = _objectWithoutProperties(_props, ['children', 'options', 'customRef', 'onChange']);

        return _react2['default'].createElement(
          'div',
          props,
          _react2['default'].Children.map(children, function (element, index) {
            return _react2['default'].cloneElement(element, {
              ref: function () {
                function ref(_ref2) {
                  _this3.children[index] = _ref2;
                }

                return ref;
              }()
            });
          })
        );
      }

      return render;
    }()
  }]);

  return Tribute;
}(_react.Component);

Tribute.propTypes = {
  customRef: func,
  children: node,
  onChange: func,
  options: shape({
    collections: arrayOf(arrayOf(object)),
    values: arrayOf(object),
    lookup: func
  }).required
};
Tribute.defaultProps = {
  onChange: function () {
    function onChange() {}

    return onChange;
  }()
};
exports['default'] = Tribute;