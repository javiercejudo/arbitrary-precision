# arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/arbitrary-precision)

Abstraction for decimal functionality in
[big.js](https://github.com/MikeMcl/big.js),
[bignumber.js](https://github.com/MikeMcl/bignumber.js),
[decimal.js](https://github.com/MikeMcl/decimal.js)
and others via adapters.

## Install

    npm i arbitrary-precision

## Adapters

- [[adapter]](https://github.com/javiercejudo/bigjs-adapter) [[lib]](https://github.com/MikeMcl/big.js) big.js
- [[adapter]](https://github.com/javiercejudo/bignumberjs-adapter) [[lib]](https://github.com/MikeMcl/bignumber.js) bignumber.js
- [[adapter]](https://github.com/javiercejudo/decimaljs-adapter) [[lib]](https://github.com/MikeMcl/decimal.js) decimal.js
- [[adapter]](https://github.com/javiercejudo/floating-adapter) [[lib]](https://github.com/javiercejudo/floating) floating

See [up to date list](https://www.npmjs.com/browse/keyword/arbitrary-precision-adapter).

## Usage

```js
var decimalFactory = require('arbitrary-precision');
var adapter = require('floating-adapter'); // See adapters section for full list

var Decimal = decimalFactory(adapter);
```

### Operations

```js
new Decimal('0.1').plus(new Decimal('0.2')).valueOf(); // => 0.1 + 0.3

new Decimal('0.3').minus(new Decimal('0.1')).valueOf(); // => 0.3 - 0.1

new Decimal('0.6').times(new Decimal('3')).valueOf(); // => 0.6 * 3

new Decimal('0.3').div(new Decimal('0.2')).valueOf(); // => 0.3 / 0.2

new Decimal('2').pow(new Decimal('3')).valueOf(); // => 8

new Decimal('2').equals(new Decimal('2')); // => true
new Decimal('2').equals(new Decimal('3')); // => false
```

### toString, valueOf and toJSON

```js
var decimalThird = new Decimal('1').div(new Decimal('3'));

// with bigjs-adapter (other adapters might have differing implementations)
decimalThird.toString() === decimalThird.valueOf() === decimalThird.toJSON(); // => true

Number(decimalThird); // => 1/3
```

### JSON.stringify and JSON.parse with reviver

```js
var Decimal40 = decimalFactory(adapter);

Decimal40.setPrecision(40);

var decimalThird = new Decimal40('1').div(new Decimal('3'));

var stringified = JSON.stringify([decimalThird]);
// => '["0.3333333333333333333333333333333333333333"]'

JSON.parse(stringified, Decimal40.JSONReviver)[0];
// => new Decimal40('0.3333333333333333333333333333333333333333')
```

See [spec](test/spec.js).
