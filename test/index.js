var test = require('testit');
var assert = require('assert');
var outputFormatToTransformer = require('..');

test('should return a list of applicable transformers', function () {
  var html = outputFormatToTransformer('html');
  assert(html.indexOf('jstransformer-posthtml') >= 0);
});

test('should return false when not found', function () {
  var transform = outputFormatToTransformer('no-output-format-found');
  assert.equal(transform, false);
});

test('should retrieve the dictionary', function () {
  assert(outputFormatToTransformer.dictionary['js']
    .indexOf('jstransformer-babel') >= 0);
});
