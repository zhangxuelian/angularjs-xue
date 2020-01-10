require('../../template/pagination/pagination.html.js');
require('./pagination');

var MODULE_NAME = 'xue.module.pagination';

angular.module(MODULE_NAME, ['xue.pagination', 'xue/template/pagination/pagination.html']);

module.exports = MODULE_NAME;