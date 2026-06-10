const express = require('express');
const cors = require('cors');

const techRoutes =
require('./routes/techRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tech', techRoutes);

module.exports = app;