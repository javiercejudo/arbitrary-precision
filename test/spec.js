/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('../src/arbitrary-precision')(adapter);

describe('linear operations with floating', function() {
  var ONE = new Decimal('1');

  it('should have all linear arbitrary precision methods', function() {
    ONE.plus.should.have.type('function');
    ONE.minus.should.have.type('function');
    ONE.times.should.have.type('function');
    ONE.div.should.have.type('function');
    ONE.equals.should.have.type('function');
  });

  it('should extend linear arbitrary precision', function() {
    ONE.pow.should.have.type('function');
    ONE.sqrt.should.have.type('function');
  });
});
