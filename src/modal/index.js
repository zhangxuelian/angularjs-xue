require('../../template/modal/modal.html.js');
require('./modal')

var MODULE_NAME = 'xue.module.modal';

angular.module(MODULE_NAME, ['xue.modal', 'xue/template/modal/modal.html']);

module.exports = MODULE_NAME;