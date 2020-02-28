require('../../template/scroller/scroller.html.js');
require('./scroller');

var MODULE_NAME = 'xue.module.scroller';

angular.module(MODULE_NAME, ['xue.scroller', 'xue/template/scroller/scroller.html']);

module.exports = MODULE_NAME;