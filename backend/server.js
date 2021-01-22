const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.js');
app.use(cors());
app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.listen(5000, function () {
    console.log('success');
})