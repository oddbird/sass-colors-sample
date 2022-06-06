var path = require('path');
var sassTrue = require('sass-true');

const sassFile = path.join(__dirname, '.', 'index.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });
