/*jshint node:true */

'use strict';

var linearArbitraryPrecision = require('linear-arbitrary-precision');
var tap = require('@javiercejudo/tap');

var extensions = [
  require('pow-arbitrary-precision')
];

module.exports = function factory(adapter) {
  return extensions.reduce(tap, linearArbitraryPrecision(adapter));
};
