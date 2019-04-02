// Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// db Setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });
// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Sever Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('server listening on:', port);
