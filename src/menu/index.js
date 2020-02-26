require('../../template/menu/menu.html.js');
require('./menu');

var MODULE_NAME = 'xue.module.menu';

angular.module(MODULE_NAME, ['xue.menu', 'xue/template/menu/menu.html']);

module.exports = MODULE_NAME;