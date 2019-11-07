// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.miter.lineedge
// Description:Miter joins are not drawn when the miter limit is exceeded at the corners of a zero-height rectangle
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Miter joins are not drawn when the miter limit is exceeded at the corners of a zero-height rectangle");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 200;
ctx.lineJoin = 'miter';
ctx.strokeStyle = '#f00';
ctx.miterLimit = 1.414;
ctx.beginPath();
ctx.strokeRect(100, 25, 200, 0);
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");

t.done();

});
done();