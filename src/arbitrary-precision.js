/*jshint node:true */

'use strict';

var linearArbitraryPrecision = require('linear-arbitrary-precision');

var extensions = [
  require('pow-arbitrary-precision'),
  require('equals-arbitrary-precision')
];

module.exports = function factory(adapter) {
  return extensions.reduce(extend, linearArbitraryPrecision(adapter));
};

function extend(Decimal, extender) {
  return extender(Decimal);
}
