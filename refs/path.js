const path = require('path');

console.log('path.dirname(__filename)', path.dirname(__filename));
console.log('path.basename(__filename)', path.basename(__filename));
console.log('path.extname(__filename).slice(1)', path.extname(__filename).slice(1));
console.log('path.parse(__filename)', path.parse(__filename));
console.log(path.resolve(__dirname, '..', './app.js'));
console.log('path.join', path.join(__dirname, '..', './app.js'));
