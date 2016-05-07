/*jshint node:true */

'use strict';

var linearArbitraryPrecision = require('linear-arbitrary-precision');
var flow = require('lodash.flow');

var extend = flow(
  require('pow-arbitrary-precision'),
  require('sqrt-arbitrary-precision'),
  require('inequality-arbitrary-precision')
);

module.exports = flow(linearArbitraryPrecision, extend);
