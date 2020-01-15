require('./util');
require('./array');
require('./collection');
require('./date');
require('./function');
require('./lang');
require('./math');
require('./methods');
require('./number');
require('./object');
require('./properties');
require('./seq');
require('./string');

var MODULE_NAME = 'xue.module.util';

angular.module(MODULE_NAME, ['xue.util', 'xue.util']);

module.exports = MODULE_NAME;
