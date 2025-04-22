const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.set('view engine', 'ejs')
