
const fs = require('fs');

module.exports = {
    readXml(path) {
        return fs.readFileSync(path, 'utf-8');
    }
}