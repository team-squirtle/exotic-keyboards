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
const productRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoutes.js');
const sessionRoutes = require('./routes/sessionRoutes.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api/product', productRoute);
app.use('/api/users', userRoute);
app.use('/api/sessions', sessionRoutes);

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '../index.html'));
 //  res.send('reached root route');
});

app.get('*', (req, res) => {
  res.status(404).send('unknown');
});

module.exports = app;
