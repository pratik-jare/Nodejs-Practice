
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head> <title>  Assignment </title> </head>');
        res.write(`<body> <h1>  Welcome to Assigment ! </h1>
        <form action="/create-user" method="POST">
            <input type="text" name="username"> 
            <button type="submit" >  create </button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head> <title>  Assignment </title> </head>');
        res.write(`<body> <h1>   User List ! </h1> <br>
        <h3> <ul> <li> User 1 </li> <li> User 2 </li> <li> User 3 </li> <a href="/" > back </a> </ul> </h3>  </body>`);
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (username) => {
            body.push(username);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log('username ---> ', parseBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    }
    res.end();
});

server.listen(3300);

