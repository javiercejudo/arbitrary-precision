/*jshint node:true, mocha:true */

'use strict';

var should = require('should');

var adapter = require('floating-adapter');
var Decimal = require('../src/arbitrary-precision')(adapter);

describe('linear operations with floating', function() {
  var ONE = new Decimal('1');

  it('should have all linear arbitrary precision methods', function() {
    should(ONE.plus).have.type('function');
    should(ONE.minus).have.type('function');
    should(ONE.times).have.type('function');
    should(ONE.div).have.type('function');
    should(ONE.mod).have.type('function');
    should(ONE.abs).have.type('function');
    should(ONE.equals).have.type('function');

    should(ONE.lt).have.type('function');
    should(ONE.lte).have.type('function');
    should(ONE.gt).have.type('function');
    should(ONE.gte).have.type('function');
    should(ONE.cmp).have.type('function');
  });

  it('should extend linear arbitrary precision', function() {
    should(ONE.pow).have.type('function');
    should(ONE.sqrt).have.type('function');
  });
});
