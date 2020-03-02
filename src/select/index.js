require('../../template/select/select.html.js');
require('./select');

var MODULE_NAME = 'xue.module.select';

angular.module(MODULE_NAME, ['xue.select', 'xue/template/select/select.html']);

module.exports = MODULE_NAME;