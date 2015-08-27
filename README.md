# to-predictable-string

[![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Stringify anything in a predictable manner, i.e. two objects with equal keys in different order gets the same result

Useful if you want to generate a hash from an object.

## Installation

Install `to-predictable-string` using [npm](https://www.npmjs.com/):

```bash
npm install --save to-predictable-string
```

## Usage

### Module usage

```javascript
var toPredictableString = require('to-predictable-string');

toPredictableString({my: 'data', prop1: {prop2: /regexp/, prop3: ['a', 'r', 'r', 'a', 'y']}});
// "{my:data,prop1:{prop2:/regexp/,prop3:[a,r,r,a,y]}}"
```

## API

### `toPredictableString(val)`

| Name | Type | Description |
|------|------|-------------|
| val | `Mixed` | The data to generate a string from |

Returns: `String`, the generated string.

## License

MIT

[npm-url]: https://npmjs.org/package/to-predictable-string
[npm-image]: https://badge.fury.io/js/to-predictable-string.svg
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
