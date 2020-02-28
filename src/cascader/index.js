require('../../template/cascader/cascader.html.js');
require('./cascader');

var MODULE_NAME = 'xue.module.cascader';

angular.module(MODULE_NAME, ['xue.cascader', 'xue/template/cascader/cascader.html']);

module.exports = MODULE_NAME;