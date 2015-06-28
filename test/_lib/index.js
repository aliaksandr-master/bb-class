'use strict';
/*eslint no-process-env:0 */

module.exports = process.env.NODE_LIB_BBCLASS_COVERAGE ? require('./../../lib-cov') : require('./../../lib');
