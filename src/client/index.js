'use strict';

const express = require('express');

// Constants
const PORT = 7777;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - client');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
