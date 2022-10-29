const { dirname } = require('path');
const path = require('path');

// let result = path.resolve('path.js');
// result = path.extname('path.js');

// result = path.parse(__filename);


// console.log(result.root);
// console.log(result.dir);
// console.log(result.base);
// console.log(result.ext);
// console.log(result.name);
// console.log(result);



//freecodecamp :
// console.log(path.sep);

const filepath=path.join('/content/', 'subfolder', 'test.txt')
console.log(filepath);

const base= path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);