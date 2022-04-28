const http = require('http');
const { hostname } = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const serverDeux = http.createServer((req, res) => {
    const value = req.url.split("?")[1]
    console.log(value);
    const value2 = value.split("&")
    console.log(value2);
    const dico = {}
    for (let index = 0; index < value2.length; index++) {
        const element = value2[index].split("=");
        dico[element[0]] = element[1]
    }
    console.log(dico);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World ! Welcome !')
});

serverDeux.listen(port, hostname, () => {
    console.log(`server running at https://${hostname}:${port}/`);
});
