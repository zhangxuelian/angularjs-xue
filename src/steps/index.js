require('../../template/steps/steps.html.js');
require('./steps');

var MODULE_NAME = 'xue.module.steps';

angular.module(MODULE_NAME, ['xue.steps', 'xue/template/steps/steps.html']);

module.exports = MODULE_NAME;