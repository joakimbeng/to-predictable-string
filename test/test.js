'use strict';
var test = require('tape');
var toStr = require('../src');

test('to-predictable-string returns the same result for objects containing the same data', function (assert) {
  var obj1 = {
    a: [1, 2],
    b: {
      c: 'd',
      e: /f/g
    }
  };
  var obj2 = {
    b: {
      e: /f/g,
      c: 'd'
    },
    a: [1, 2]
  };
  assert.ok(toStr(obj1) === toStr(obj2), 'The strings should be the same');
  assert.end();
});

test('to-predictable-string handles arrays', function (assert) {
  var arr1 = [{a: 1}, 2, /a/];
  var arr2 = [{a: 1}, 2, /a/];
  assert.ok(toStr(arr1) === toStr(arr2), 'Two arrays with equal content should get the same result');
  assert.end();
});

test('to-predictable-string handles circular data', function (assert) {
  var obj1 = {
    a: 1
  };
  obj1.o = obj1;
  assert.equal(toStr(obj1), '{a:1,o:[circular]}', 'Circular data should not break the code');
  assert.end();
});
