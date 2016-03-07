# is-eslint-severity

[![NPM version](https://img.shields.io/npm/v/is-eslint-severity.svg)](https://www.npmjs.com/package/is-eslint-severity)
[![Build Status](https://travis-ci.org/shinnn/is-eslint-severity.svg?branch=master)](https://travis-ci.org/shinnn/is-eslint-severity)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-eslint-severity.svg)](https://coveralls.io/r/shinnn/is-eslint-severity)
[![dependency Status](https://david-dm.org/shinnn/is-eslint-severity.svg)](https://david-dm.org/shinnn/is-eslint-severity)
[![devDependency Status](https://david-dm.org/shinnn/is-eslint-severity/dev-status.svg)](https://david-dm.org/shinnn/is-eslint-severity#info=devDependencies)

Check if a given value is one of the [ESLint](http://eslint.org/) [severity level](http://eslint.org/docs/user-guide/configuring#configuring-rules) specifiers

```javascript
const isEslintSeverity = require('is-eslint-severity');

isEslintSeverity(0); //=> true
isEslintSeverity(1); //=> true
isEslintSeverity(2); //=> true

isEslintSeverity('off'); //=> true
isEslintSeverity('warn'); //=> true
isEslintSeverity('error'); //=> true

isEslintSeverity(3); //=> false
isEslintSeverity('info'); //=> false
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install is-eslint-severity
```

## API

```javascript
const isEslintSeverity = require('is-eslint-severity');
```

### isEslintSeverity(*value*)

*value*: `String` or `Number`  
Return: `Boolean`

It returns `true` if the given value can be used as an [ESLint](https://github.com/eslint/eslint) rule severity, otherwise returns `false`.

```javascript
isEslintSeverity(1.5); //=> false
isEslintSeverity([2]); //=> false
isEslintSeverity(new Buffer('off')); //=> false
isEslintSeverity(); //=> false
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
