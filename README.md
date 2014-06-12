# webgl-context

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Grabs a WebGLRenderingContext and will return null if it doesn't exist.

## Usage

[![NPM](https://nodei.co/npm/webgl-context.png)](https://nodei.co/npm/webgl-context/)

```js
//get a GL context, will be null if not found
var gl = require('webgl-context')();
```

```js
//or with optional settings...
var gl = require('webgl-context')({
	canvas: canvas, //the canvas DOM element to use
	width: 400, //resizes the canvas..
	height: 200, 
	attributes: { failIfMajorPerformanceCaveat: true } //custom attributes
});
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/webgl-context/blob/master/LICENSE.md) for details.
