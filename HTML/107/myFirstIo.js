let fs = require('fs');
console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1);
