
const http = require('http');

const server = http.createServer((req, res)  => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
        return;
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page');
        return;

    }
    res.end(`
     <h1>KEK, 404</h1>
     <a href="/">home</a>
    `);

})

server.listen(5000);
