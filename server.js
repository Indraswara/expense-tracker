const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

//router 
const transactions = require('./routes/transactions');

//initialize app
const app = express(); 

// app.get('/', (req, res) => res.send('Hello')); 
app.use('/api/v1/transactions', transactions); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))