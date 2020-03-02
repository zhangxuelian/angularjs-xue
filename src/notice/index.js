require('../../template/notice/notice.html.js');
require('./notice');

var MODULE_NAME = 'xue.module.notice';

angular.module(MODULE_NAME, ['xue.notice', 'xue/template/notice/notice.html']);

module.exports = MODULE_NAME;