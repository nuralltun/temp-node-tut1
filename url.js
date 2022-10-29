const url = require('url');

const address = 'https://www.btkakademi.gov.tr/portal/course/player/deliver/node-js-ile-web-programlama-14301';

let result= url.parse(address,true);

console.log(result);
console.log(result.path);