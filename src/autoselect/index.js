
require('../../template/autoselect/autoselect.html.js');
require('./autoselect');

var MODULE_NAME = 'xue.module.autoselect';

angular.module(MODULE_NAME, ['xue.autoselect', 'xue/template/autoselect/autoselect.html']);

module.exports = MODULE_NAME;