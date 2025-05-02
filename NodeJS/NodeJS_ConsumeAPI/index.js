const http = require('http');
const fs = require('fs');
const request = require('request');
const handlebars = require('handlebars');

const templateFile = './templates/template.hbs';
const source = fs.readFileSync(templateFile, 'utf8');

var france, italy, spain, portugal;

request.get("https://date.nager.at/Api/v1/Get/fr/2021", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    france = JSON.parse(body);
});
request.get("https://date.nager.at/Api/v1/Get/it/2021", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    italy = JSON.parse(body);
});
request.get("https://date.nager.at/Api/v1/Get/es/2021", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    spain = JSON.parse(body);
});
request.get("https://date.nager.at/Api/v1/Get/pt/2021", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    portugal = JSON.parse(body);
});

http.createServer(function (req, res) {
    console.log("Request was made at " + req.url);

    if (req.url === "/" || req.url === "/main.html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/html/main.html', 'utf-8').pipe(res);
    }
    else if (req.url === "/api/france") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const template = handlebars.compile(source, { strict: true });
        const result = template({obj1:france, obj2:{country: "FRANCE"}});
        res.end(result);
    }
    else if (req.url === "/api/italy") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const template = handlebars.compile(source, { strict: true });
        const result = template({obj1:italy, obj2:{country: "ITALY"}});
        res.end(result);
    }
    else if (req.url === "/api/spain") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const template = handlebars.compile(source, { strict: true });
        const result = template({obj1:spain, obj2:{country: "SPAIN"}});
        res.end(result);
    }
    else if (req.url === "/api/portugal") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const template = handlebars.compile(source, { strict: true });
        const result = template({obj1:portugal, obj2:{country: "PORTUGAL"}});
        res.end(result);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/html/404.html').pipe(res);
    }
}).listen(8000);

console.log('Server runs at port 8000...');

