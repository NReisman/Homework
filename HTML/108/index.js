const { readFile } = require('fs');
readFile('./index.txt', 'utf8', (err, txt) => {
    console.log(txt);
});

console.log("do this first");