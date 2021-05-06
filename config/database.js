const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.pq28x.mongodb.net/hotel?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});