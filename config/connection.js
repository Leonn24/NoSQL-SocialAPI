// Importing the mongoose library
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the MongoDB URI provided in the environment 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection