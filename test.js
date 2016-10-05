'use strict';

const isEslintSeverity = require('.');
const test = require('tape');

test('isEslintSeverity()', t => {
  t.strictEqual(isEslintSeverity.name, 'isEslintSeverity', 'should have a function name.');

  t.strictEqual(isEslintSeverity(0), true, 'should regard 0 as a valid ESLint severity.');
  t.strictEqual(isEslintSeverity(1), true, 'should regard 1 as a valid ESLint severity.');
  t.strictEqual(isEslintSeverity(2), true, 'should regard 2 as a valid ESLint severity.');

  t.strictEqual(isEslintSeverity('off'), true, 'should regard "off" as a valid ESLint severity.');
  t.strictEqual(isEslintSeverity('warn'), true, 'should regard "warn" as a valid ESLint severity.');
  t.strictEqual(isEslintSeverity('error'), true, 'should regard "error" as a valid ESLint severity.');

  t.strictEqual(
    isEslintSeverity(3),
    false,
    'should regard a wrong number as an invalid ESLint severity.'
  );

  t.strictEqual(
    isEslintSeverity('info'),
    false,
    'should regard a wrong string as an invalid ESLint severity.'
  );

  t.strictEqual(
    isEslintSeverity(/error/),
    false,
    'should return false when the argument is neither a string nor a number.'
  );

  t.strictEqual(
    isEslintSeverity(),
    false,
    'should return false when it takes no arguments.'
  );

  t.end();
});
