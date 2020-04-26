const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/savingLivesDb', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoDb connection error:'));

db.on('connected', function callback () {
    console.log("Connected to Saving Lives Database");
});

db.once('open', function callback () {
  console.log("Saving Lives Database is now open for operations");
});

db.on('disconnected', function callback () {
    console.log("Disconnected to Saving Lives Database");
});

module.exports = db;