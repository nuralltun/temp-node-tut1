const fs =require('fs')

console.log('start');
const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/subfolder/second.txt','utf-8')

console.log('done with this task');
fs.writeFileSync('./content/result.txt',`Here is the result ${first}, ${second}`)




console.log(first,second);
console.log('starting the next one');