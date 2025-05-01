const app = require('./app.js');
const mongoose = require('mongoose');

const db_url = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);