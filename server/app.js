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

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


// app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/api/product', productRoute);
app.use('/api/users', userRoute);

app.use('/', (req, res) => {
 res.sendFile(path.join(__dirname, '../index.html'));
 //  res.send('reached root route');
});


module.exports = app;
