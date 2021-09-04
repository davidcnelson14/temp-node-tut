const path = require('path');

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)


//accepts a sequence of paths or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)