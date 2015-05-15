'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = cli;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _colorsSafe = require('colors/safe');

var _colorsSafe2 = _interopRequireDefault(_colorsSafe);

var _player = require('player');

var _player2 = _interopRequireDefault(_player);

var radios = {
  'swiss-pop': {
    'name': 'Radio Swiss Pop',
    'stream': 'http://stream.srg-ssr.ch/m/rsp/mp3_128'
  }
};

var templates = {
  'not_found': '\n    Please input your favorite radio\'s name: \n\n    ' + _colorsSafe2['default'].green('$ radios swiss-pop') + '\n  ',
  'not_support': function not_support(name) {
    return '\n      Radio ' + _colorsSafe2['default'].red(name) + ' is not supported now :(\n    ';
  },
  'playing': function playing(radio) {
    return '\n      Now playing:\n\n      ' + _colorsSafe2['default'].green(radio.name) + ' ' + _colorsSafe2['default'].grey(radio.stream) + '\n    ';
  },
  'error': function error(err) {
    return '\n      Opps! something wrong:\n\n      ' + err + '\n    ';
  }
};

function cli() {
  var name = process.argv[2];
  var radio = radios[name];

  if (!name) return console.log(templates.not_found);
  if (!radio) return console.log(templates.not_support(name));

  new _player2['default'](radio.stream).enable('stream').on('playing', function () {
    return console.log(templates.playing(radio));
  }).on('error', function (err) {
    return console.log(templates.error(err));
  }).play();
}

module.exports = exports['default'];
//# sourceMappingURL=radios.js.map