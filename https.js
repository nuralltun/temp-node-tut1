const http =require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
// });




// server.listen(3000);
// console.log('Listening port on 3000..');

const server = http.createServer((req,res)=>{
   if(req.url=== '/'){
    res.write('HELLO WORLD');
    res.end();

    };
    if(req.url=== '/api/product'){
        res.write('Hello req');
        res.end();
    }
});




server.listen(3000);
console.log('Listening port on 3000..');