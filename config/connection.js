const mongoose = require('mongoose');
const dotenv = require('./dotenv').config();

mongoose.connect(process.env.MONOGDB_URI ,{
    dbName: process.env.DB_NAME,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection