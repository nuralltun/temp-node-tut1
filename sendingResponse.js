const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode=200;
    // res.statusMessage='OK';
    // res.write('<html>');
    // res.write('<head><title>MY FIRST PAGE</title></head>');
    // res.write('<body><h1>HELLO FROM NODEJS SERVER</h1></body>');
    // res.write('</html>');




    // res.end();

    fs.readFile('indexxc.html', function (error, file) {
        if (error) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.write('Dosya Bulunamadı...');
            res.end();

        } else {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end(file);
        }

    })
});





server.listen(3000);
console.log('Listening port on 3000..');