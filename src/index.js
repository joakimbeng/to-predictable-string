'use strict';
var isPlainObject = require('is-plain-object');

module.exports = function toPredictableString(val) {
  var traversed = [];
  return (function toStr(val) {
    if (Array.isArray(val)) {
      if (!val.length) {
        return '[]';
      } else if (traversed.indexOf(val) !== -1) {
        return '[circular]';
      }
      traversed.push(val);
      return '[' + val.map(toStr).join(',') + ']';
    } else if (isPlainObject(val)) {
      var keys = Object.keys(val).sort();
      if (!keys.length) {
        return '{}';
      } else if (traversed.indexOf(val) !== -1) {
        return '[circular]';
      }
      traversed.push(val);
      return '{' + keys.map(function (key) {
        return key + ':' + toStr(val[key]);
      }).join(',') + '}';
    }
    return String(val);
  })(val);
};
