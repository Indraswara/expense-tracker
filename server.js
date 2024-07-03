const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

//initialize app
const app = express(); 

app.get('/', (req, res) => res.send('Hello')); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))