/*jshint node:true */

'use strict';

var linearArbitraryPrecision = require('linear-arbitrary-precision');
var flow = require('lodash.flow');

var extend = flow(
  require('pow-arbitrary-precision')
);

module.exports = function factory(adapter) {
  return extend(linearArbitraryPrecision(adapter));
};
