require('../util');
require('../pagination');
require('../../template/table/table.html.js')
require('./table');

var MODULE_NAME = 'xue.module.table';

angular.module(MODULE_NAME, ['xue.table', 'xue/template/table/table.html']);

module.exports = MODULE_NAME;