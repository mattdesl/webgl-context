var test = require('tape').test;
var ctx = require('./');

test('should get webgl context', function(t) {
    if (typeof document === "undefined")
        throw new Error("no 'document' object, make sure to test from browser");
    if (typeof WebGLRenderingContext === "undefined")
        throw new Error("browser does not support WebGLRenderingContext");
    
    var gl = ctx();
    t.ok(gl instanceof WebGLRenderingContext, 'WebGL Supported');
	t.end();
});