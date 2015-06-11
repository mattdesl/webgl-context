var test = require('tape').test
var create = require('../')

test('should get webgl context', function (t) {
  if (typeof document === 'undefined')
    throw new Error("no 'document' object, make sure to test from browser")
  if (typeof WebGLRenderingContext === 'undefined')
    throw new Error('browser does not support WebGLRenderingContext')

  var gl = create()
  t.ok(gl instanceof WebGLRenderingContext, 'WebGL context returned')
  t.equal(create({ canvas: {} }), null, 'returns null on fail')
  t.end()
})

test('creates a canvas with a webgl context', function (t) {
  var canvas = document.createElement('canvas')
  var ctx = create({ width: 256, height: 128, canvas: canvas })
  t.equal(ctx.canvas, canvas, 'allows passing canvas')
  t.equal(canvas.width, 256, 'sets width')
  t.equal(canvas.height, 128, 'sets height')
  t.end()
})

test('closes', function (t) {
  if (window.close) {
    setTimeout(function () {
      window.close()
    }, 1000)
  }
  t.end()
})
