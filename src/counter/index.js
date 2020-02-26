
require('../../template/counter/counter.html.js');
require('./counter');

var MODULE_NAME = 'xue.module.counter';

angular.module(MODULE_NAME, ['xue.counter', 'xue/template/counter/counter.html']);

module.exports = MODULE_NAME;