const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");
const app = express();
const dataFile = './data/data.json'

var logger = (req, res, next) => {
    console.log('Logger...');
    next();
}

//use middleware *** order, important
app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

// View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Data
var books = require(dataFile);

app.get('/', (req, res) => {
    var title = "List of Books";
    res.render('index', {
        title: title,
        books: books
    });
});

app.post('/books/add', (req, res) => {
    console.log('FORM OK');
    var newbook = {
        author: req.body.author,
        title: req.body.title,
        pages: parseInt(req.body.pages)
    }
    console.log(newbook);
    books.push(newbook);
    let data = JSON.stringify(books);
    fs.writeFileSync(dataFile, data);

    console.log(books);
    res.redirect('/');
});

app.get('/books/del/:author', (req, res) => {
     console.log(req.params.author);
     var bookDel = req.params.author;

     for(i=0; i < books.length; i++) {
        if(books[i].author == bookDel) {
            console.log(i);
            books.splice(i,1);
            break;
        }
    }
    let data = JSON.stringify(books);
    fs.writeFileSync(dataFile, data);

     res.redirect('/');
});

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`'Server started at port : ${PORT}`);
})