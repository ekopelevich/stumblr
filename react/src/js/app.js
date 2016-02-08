'use strict';

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
  displayName: 'Header',

  getInitialState: function getInitialState() {
    return { user: null };
  },
  componentDidMount: function componentDidMount() {
    var component = this;
    _jQuery2.default.ajax({
      method: 'get',
      url: '/api/users/current-user'
    }).done(function (user) {
      if (Object.keys(user).length) {
        component.setState({ user: user });
      }
    }).fail(console.log);
  },
  render: function render() {
    console.log(this.state);
    if (this.state.user) {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Stumblr'
        ),
        _react2.default.createElement(Menu, null)
      );
    } else {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Stumblr'
        )
      );
    }
  }
});

var Menu = _react2.default.createClass({
  displayName: 'Menu',

  getInitialState: function getInitialState() {
    return {
      menu: [{
        text: 'menu item 1',
        link: 'google.com'
      }, {
        text: 'menu item 2',
        link: 'amazon.com'
      }]
    };
  },
  render: function render() {
    var lis = this.state.menu.map(function (item, i) {
      return _react2.default.createElement(
        'li',
        { key: i },
        item.text
      );
    });
    return _react2.default.createElement(
      'ul',
      { className: 'data-responsive-menu' },
      lis
    );
  }
});

var Login = _react2.default.createClass({
  displayName: 'Login',

  render: function render() {
    return _react2.default.createElement(
      'a',
      { href: '/auth/twitter' },
      _react2.default.createElement(
        'button',
        { className: 'button' },
        'Login with Twitter'
      )
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(Header, null), (0, _jQuery2.default)('#header')[0]);
_reactDom2.default.render(_react2.default.createElement(Login, null), (0, _jQuery2.default)('#main')[0]);