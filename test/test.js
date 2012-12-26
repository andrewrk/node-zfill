var zfill = require('../')
  , assert = require('assert');

describe("zfill", function() {
  it("works", function() {
    assert.strictEqual(zfill(2772, 3), "2772");
    assert.strictEqual(zfill(2772, 5), "02772");
    assert.strictEqual(zfill("12345", 3), "12345");
    assert.strictEqual(zfill("123", 8), "00000123");
  });
});
