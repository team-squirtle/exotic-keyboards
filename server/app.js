// 2nd connecting up express to PG
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
//routes
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const sessionRoutes = require('./routes/sessionRoutes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/session', sessionRoutes);

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '../index.html'));
 //  res.send('reached root route');
});

app.get('*', (req, res) => {
  res.status(404).send('unknown');
});

module.exports = app;
