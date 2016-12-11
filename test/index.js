'use strict';

/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

// 3rd party
const assert = require('chai').assert;
const stack = require('callsite');

// lib
const filter = require('../lib/index.js');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('flvr-filter-mocha', function () {

  it('Should remove mocha frames from stack trace.', function () {
    assert.equal(filter(null, stack()).length, 4);
  });

});
