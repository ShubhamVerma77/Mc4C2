const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const Array =[{
        name: 'Shubham',
        age: 22,
    }]
    res.json(Array);
});

app.listen(3000);