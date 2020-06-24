const glob = require('glob');

var result = null;
console.time('glob')
result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')

console.log(result)