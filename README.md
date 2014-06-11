[![browser support](https://ci.testling.com/mattdesl/webgl-context.png)](https://ci.testling.com/mattdesl/webgl-context)

# webgl-context

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Gets a WebGLRenderingContext.

## Usage

[![NPM](https://nodei.co/npm/webgl-context.png)](https://nodei.co/npm/webgl-context/)

```
//get a GL context, will be null if not found
var gl = require('webgl-context')();

//or with optional settings...
var gl = require('webgl-context')({
	canvas: canvas, //the canvas DOM element to use
	attribs: { failIfMajorPerformanceCaveat: true } //custom attributes
});
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/webgl-context/blob/master/LICENSE.md) for details.
