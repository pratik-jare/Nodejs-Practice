const express = require('express');
const path = require('path');

const rootRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(rootRoutes)

app.listen(3000);