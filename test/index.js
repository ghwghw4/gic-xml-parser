const parser = require('../dist/index').default;
const JSON5 = require('json5')

const fs = require('fs');

const result = parser(fs.readFileSync('./test/complex/1.xml'));
console.log(JSON5.stringify(result, null, '\t'))