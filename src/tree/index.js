require('../../template/tree/tree.html.js');
require('./tree');

var MODULE_NAME = 'xue.module.tree';

angular.module(MODULE_NAME, ['xue.tree', 'xue/template/tree/tree.html']);

module.exports = MODULE_NAME;