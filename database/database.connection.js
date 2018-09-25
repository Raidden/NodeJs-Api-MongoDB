// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://raidden:abc123@ds161700.mlab.com:61700/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;