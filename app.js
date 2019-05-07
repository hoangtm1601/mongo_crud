const port = 1234;
const express = require('express');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
app.use(express.urlencoded());
//===============================
const MONGO_URL = "mongodb://127.0.0.1:27017/mongo_crud";

const mongoose = require('mongoose');
mongoose.connect(MONGO_URL);
mongoose.Promise = global.Promise;
let dB = mongoose.connection;

dB.on('error', console.error.bind(console, 'Connect to mongo failed'));
//===============================
app.use('/products', product);


//================================
app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});
