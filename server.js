// # Requests & Responses

/* 
node js is different from php here you dont have apache to serve you
 you will write your own server to handle requests and responses
 */

const http = require('http');
const fs = require('fs');

const serve = http.createServer((req, res) => {
    //will run every time a request come to the server
    console.log(req.url, req.method);

    //set Header Content Type
    //res.setHeader('Content-Type','text/plain');

    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello World , Hello Node</h1>');
    // res.end();

    //Basic Routing
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;

    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            //to prevent browser hanging 
            res.end();

        } else {
            // res.write(data);

            //short  way for single file
            res.end(data);

        }
    });






    //Read File example

    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         //to prevent browser hanging
    //         res.end();

    //     } else {
    //         // res.write(data);

    //         //short  way for single file
    //         res.end(data);

    //     }
    // });



});

serve.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000 ');
});