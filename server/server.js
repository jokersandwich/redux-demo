const express = require('express');
const mongoose = require('mongoose');


// mongodb
mongoose.connect('mongodb://localhost:27017/person');
mongoose.connection.on('connected', function() {
    console.log('mongo connect success');
});

const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true },
}));

// User.create({
//     user: 'Jack', 
//     age: 18
// }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//         console.log('create success');
//     } else {
//         console.log(err);
//     }
// })

// User.remove({ age: 18 }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//         console.log('remove success');
//     } else {
//         console.log(err);
//     }
// });

// User.update({ 'user': 'Mike' }, { '$set': { age: 20 } }, function(err, doc) {
//     if (!err) {
//         console.log(doc);
//         console.log('update success');
//     } else {
//         console.log(err);
//     }
// })


// app
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello world!</h1>')
});
app.get('/data', function(req, res) {
    User.find({}, function(err, doc) {
        res.json(doc);
    });
    // User.findOne({ user: 'Jack' }, function(err, doc) {
    //     res.json(doc);
    // })
});
app.listen(9093, function() {
    console.log('Node app start at port 9093');
});