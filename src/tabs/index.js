require('../../template/tabs/tabs.html.js');
require('./tabs');

var MODULE_NAME = 'xue.module.tabs';

angular.module(MODULE_NAME, ['xue.tabs', 'xue/template/tabs/tabs.html']);

module.exports = MODULE_NAME;