/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('../src/arbitrary-precision')(adapter);

describe('linear operations with floating', function() {
  it('should have a plus method', function() {
    new Decimal('1').pow.should.have.type('function');
  });

  it('should have a pow method', function() {
    new Decimal('1').pow.should.have.type('function');
  });
});
