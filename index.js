/*!
 * is-eslint-severity | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-eslint-severity
*/
'use strict';

const {CLIEngine} = require('eslint');

function createTempCli(severity) {
  new CLIEngine({
    useEslintrc: false,
    rules: {
      semi: severity
    }
  });
}

module.exports = function isEslintSeverity(severity) {
  try {
    createTempCli(severity);
  } catch (e) {
    return false;
  }

  return true;
};
