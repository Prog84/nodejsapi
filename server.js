var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var app = express();
var db = require('./db');
var staffController = require('./controllers/staff');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('Hello API');
})

//получение списка
app.get('/staff', staffController.all);

//получение одного
app.get('/staff/:id', staffController.findById);

//добавление
app.post('/staff', staffController.create);

//редактирование
app.put('/staff/:id', staffController.update);

//удаление
app.delete('/staff/:id', staffController.delete);

db.connect('mongodb://localhost:27017/nodeapi', function(err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3000, function () {
    console.log('Api app started');
    })
})
    



