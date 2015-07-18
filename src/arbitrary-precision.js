/*jshint node:true */

'use strict';

var linearArbitraryPrecision = require('linear-arbitrary-precision');
var powExtender = require('pow-arbitrary-precision');

module.exports = function factory(adapter) {
  var Decimal = linearArbitraryPrecision(adapter);

  powExtender(Decimal);

  return Decimal;
};
