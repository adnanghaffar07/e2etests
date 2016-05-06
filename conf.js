// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
  /*  jasmineNodeOpts: {
  // If true, print colors to the terminal.
  showColors: true,
  // Default time to wait in ms before a test fails.
  defaultTimeoutInterval: 30000,
  // Function called to print jasmine results.
  print: function() {},
  // If set, only execute specs whose names match the pattern, which is
  // internally compiled to a RegExp.
  grep: 'pattern',
  // Inverts 'grep' matches
  invertGrep: false
}
*/
};