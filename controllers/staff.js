var Staff = require('../models/staff.js');

exports.all = function (req, res) {
    Staff.all(function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = function (req, res) {
    Staff.findById(req.params.id, function(err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = function (req, res) {
    var person = {
        name: req.body.name
    };
    Staff.create(person, function(err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(person);
    })
}

exports.update = function (req, res) {
    Staff.update(req.params.id, { name: req.body.name }, function(err, result) {
        if (err) {
           console.log(err);
           return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = function (req, res) {
    Staff.delete(req.params.id, function(err, result) {
        if (err) {
           console.log(err);
           return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}



