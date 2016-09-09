/**
 * Run all the examples in the `examples` directory.
 */

var fs = require('fs');

var config = require('./config');
console.log(config);

var SPACER = '\n-------------------------------------\n\n';

var exampleFiles = fs.readdirSync(__dirname);
// only get the examples files identified by file naming convention
exampleFiles = exampleFiles.filter(function(fileName) {
  return fileName.match(/^ex\-.*\.js$/);
});
var examplesToRunCount = exampleFiles.length;
var exampleIndex = 0;
var currentExampleFile = null;
var failures = [];

function runNextExample(err, res) {
  if(err) {
    console.error('Error running', currentExampleFile, 'Error', err);
    failures.push({example: currentExampleFile, error: err});
  }
  else if(currentExampleFile) {
    console.log('Example complete:', currentExampleFile, 'Result', res);
  }
  
  if(exampleIndex < examplesToRunCount) {
    currentExampleFile = exampleFiles[exampleIndex];
    ++exampleIndex;
    
    console.log(SPACER, exampleIndex + '.',  'Loading', currentExampleFile);
    runExample(currentExampleFile, runNextExample);
  }
  else {
    console.log(SPACER, 'All examples complete');
    if(failures.length > 0) {
      console.error(SPACER, failures.length, 'example(s) provided errors\n\n', failures);
    }
  }
}

function runExample(exampleFile, callback) {
  var example = require(__dirname + '/' + exampleFile);

  console.log('Starting', exampleFile);
  example(callback, config);
}

console.log('Found', examplesToRunCount, 'examples to run:\n', exampleFiles);
runNextExample();

// runExample('ex-send-sms.js', console.log);
// runExample('ex-number-insight-basic.js', console.log);
