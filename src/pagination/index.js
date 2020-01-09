require('../paging');
require('../tabindex');
require('../../template/pagination/pagination.html.js');
require('./pagination');

var MODULE_NAME = 'ui.xue.module.pagination';

angular.module(MODULE_NAME, ['ui.xue.module.pagination','uib/template/pagination/pagination.html']);