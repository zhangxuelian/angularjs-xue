require('../../template/datepicker/datepicker.html.js');
require('./datepicker');

var MODULE_NAME = 'xue.module.datepicker';

angular.module(MODULE_NAME, ['xue.datepicker', 'xue/template/datepicker/datepicker.html']);

module.exports = MODULE_NAME;