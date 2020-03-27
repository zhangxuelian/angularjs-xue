require('../../template/popover/popover.html.js');
require('./popover');

var MODULE_NAME = 'xue.module.popover';

angular.module(MODULE_NAME, ['xue.popover', 'xue/template/popover/popover.html']);

module.exports = MODULE_NAME;