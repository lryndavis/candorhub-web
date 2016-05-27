'use strict'
const babel = require('babel-core/register');

//avoid syntax errors when mocha encounters files loaded with webpack loaders
require.extensions['.png'] = () => null;
